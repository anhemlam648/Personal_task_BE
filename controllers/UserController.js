const admin = require('../config/firebase');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { email, name } = req.body;
        const firebaseUid = req.user.uid;
        
        let user = await User.findOne({ firebaseUid });
    
        if (!user) {
          user = new User({ firebaseUid, email, name });
          await user.save();
        }
    
        res.status(201).send(user);
      } catch (error) {
        res.status(500).send(error);
      }
};

exports.loginUser = async (req, res) => {
    try {
        const firebaseUid = req.user.uid;
        const user = await User.findOne({ firebaseUid });
    
        if (!user) {
          return res.status(404).send({ message: 'User not found' });
        }
    
        res.send(user);
      } catch (error) {
        res.status(500).send(error);
      }
};

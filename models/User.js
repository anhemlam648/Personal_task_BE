const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firebaseUid: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
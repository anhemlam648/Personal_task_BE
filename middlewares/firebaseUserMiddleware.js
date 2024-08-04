const admin = require('../config/firebase');

const firebaseAuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // check title Authorization !null and begin "Bearer "
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  // get Token from title
  const idToken = authHeader.split('Bearer ')[1];
  try {
    // auth token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // save user for req.user
    next(); // continue action
  } catch (error) {
    console.error('verifying Firebase ID token error:', error);
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = firebaseAuthMiddleware;

const admin = require('firebase-admin');
const serviceAccount = require('../firebaseAccount');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
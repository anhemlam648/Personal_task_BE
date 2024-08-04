const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://nghia123:hoR84hLvcfDIlJQP@cluster0.e5ad3ky.mongodb.net/personal-task', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false, 
//     useCreateIndex: true
//   });  
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://nghia123:hoR84hLvcfDIlJQP@cluster0.e5ad3ky.mongodb.net/personal-task';
async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, 
      useCreateIndex: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Connection error:', error.message);
  }
}

connectToDatabase();

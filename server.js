const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://nghia123:hoR84hLvcfDIlJQP@cluster0.e5ad3ky.mongodb.net/personal-task', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false, 
//     useCreateIndex: true
//   });  
const app = express();
app.use(express.json()); // handle JSON in the request body

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
  
  //Routes
  app.use('/api', userRoutes);

  const PORT = process.env.PORT || 8080;
    // console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
  } catch (error) {
    console.error('Connection error:', error.message);
  }
}

connectToDatabase();

import { MongoClient} from 'mongodb';


// Database URI connection details
// These details are public only for the sake of this project
const mongoURI = 'mongodb://localhost:27017/booking-system'; 
const dbName = 'booking'; 



// Function to establish a connection to MongoDB
async function connectToMongo(): Promise<MongoClient> {
  try {
    const client = await MongoClient.connect(mongoURI);
    console.log('Database connected successfully 🚀');

    const db = client.db(dbName);

    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectToMongo;
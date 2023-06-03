import express, { Request, Response } from 'express';
import userRoute from './route/api';
import connect from './database/connect';


const mongoURI = 'mongodb://localhost:27017/booking-system'; 

// Create an Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect()
userRoute(app)

// Define home route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000,async () => {
  console.log('Server is running on port 3000');
  await connect()
});

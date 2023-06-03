import express, { Request, Response } from 'express';
import connectToMongo from './database/connect';



// Create an Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongo()

// Define home route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

import express, { Request, Response } from 'express';

// Create an Express application
const app = express();

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

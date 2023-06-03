# Booking App

The Booking App is a simple application that allows users to sign up, log in, book tickets, and unbook tickets. This README provides an overview of the app, its features, and instructions for running the app locally.

### Features
* User Sign Up: Users can create an account by providing their name, email, and password.
* User Log In: Registered users can log in to their account using their email and password.
* Ticket Booking: Users can book tickets by specifying the number of tickets they want to book.
* Ticket Unbooking: Users can unbook previously booked tickets.
* Error Handling: The app handles errors gracefully and provides appropriate error messages.

### Technologies Used
The Booking App is built using the following technologies:

* Node.js: A JavaScript runtime environment.
* Express.js: A web application framework for Node.js.
* MongoDB: A NoSQL database for storing user and booking data.
* Mongoose: An Object Data Modeling (ODM) library for MongoDB.
* Jest: A testing framework for JavaScript.
* TypeScript: A typed superset of JavaScript.

### Getting Started
To run the Booking App locally, follow these steps:

1 Clone the repository:
git clone https://github.com/kelechinwaji/semaphore.git

2 Navigate to the project directory:
cd booking-app

3 Install the dependencies:
npm install

4 Start the app:
npm start:dev
The app will be running on http://localhost:3000.

### Testing
The Booking App includes unit tests to ensure the correctness of its functionalities. To run the tests, use the following command:

npm test


### API Documentation
The Booking App provides the following API endpoints:

* POST /signup: Create a new user account.
* POST /login: Log in to an existing user account.
* POST /book: Book tickets.
* DELETE /unbook/:bookingId: Unbook tickets.

For detailed API documentation, refer to the [API Documentation](https://documenter.getpostman.com/view/19095516/2s93sW8b8j) file.

Contributing
Contributions to the Booking App are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
# FracttalBack - Backend

![FracttalBack]

Welcome to the FracttalBack backend repository! This project is the backend implementation for the Fracttaltest application. It is built with Node.js and Express.js, and it handles user authentication, CRUD operations, and transaction logging for the application.

## Installation

To get started with FracttalBack backend, make sure you have [Node.js](https://nodejs.org) installed. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project's root directory using the terminal or command prompt.
3. Run the following command to install the required dependencies:

```bash
npm install
```

This will install all the necessary packages listed in the `package.json` file.

## Usage

Once you have installed the dependencies, you can use the following scripts to run the backend server:

- `npm run dev`: Launches the backend server using Nodemon, which enables hot-reloading during development.

## Dependencies

The FracttalBack backend relies on the following main dependencies:

- `bcryptjs`: Library for hashing and salting passwords securely.
- `cookie-parser`: Middleware for parsing cookies in Express.js.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- `crypto`: Built-in Node.js library for cryptographic functions.
- `dotenv`: Library for reading environment variables from a .env file.
- `express`: Fast and minimalist web framework for Node.js.
- `jsonwebtoken`: Library for creating and verifying JSON Web Tokens (JWT).
- `mongoose`: MongoDB object modeling library for Node.js.
- `morgan`: HTTP request logger middleware for Express.js.
- `zod`: TypeScript-first schema validation library.

## Project Structure

The project's folder structure follows a common pattern for Express.js applications. Here's an overview of the main directories and files:

- `/src`: The source folder where all application code resides.
  - `/controllers`: Contains controller functions that handle different routes and operations.
  - `/middlewares`: Includes custom middleware functions used in the application.
  - `/models`: Holds MongoDB schemas and models for data representation.
  - `/routes`: Contains route definitions and handling.
  - `index.js`: The entry point of the backend server.
- `config.js`: Configuration file for setting up environment variables and other configurations.

## Contributing

Contributions to FracttalBack backend are welcome! If you encounter any issues, have suggestions for improvements, or want to add new features, please open an issue or submit a pull request. Before contributing, please read our [Contributing Guidelines](CONTRIBUTING.md).

## License

FracttalBack backend is licensed under the ISC License. You can find more details in the [LICENSE](LICENSE) file.

---

Thank you for choosing FracttalBack backend! If you have any questions or need further assistance, feel free to contact us at jucamilo340@gmail.com
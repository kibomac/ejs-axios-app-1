# EJS and Axios Random User Generator App

This project is a simple web application that fetches random user data from the Random User Generator API and displays it using EJS templating. The application is built with Node.js and utilizes Express for the server and Axios for making HTTP requests.

## Project Structure

```
ejs-axios-app
├── public
│   ├── css
│   │   └── styles.css
├── src
│   ├── app.mjs
│   ├── routes
│   │   └── index.mjs
│   └── views
│       ├── index.ejs
│       └── partials
│           └── header.ejs
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ejs-axios-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Features

- Fetches 10 random users from the Random User Generator API.
- Displays user information including name, email, and profile picture.
- Utilizes EJS for templating and rendering views.

## Dependencies

- Express: A web framework for Node.js.
- Axios: A promise-based HTTP client for the browser and Node.js.
- EJS: A templating engine that lets you generate HTML markup with plain JavaScript.

## License

This project is licensed under the MIT License.
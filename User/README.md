# User Management RESTful API

A simple RESTful API built using Node.js and Express to manage a list of users. It supports creating, reading, updating, and deleting users with basic middleware and error handling.

---

## Features

- Retrieve all users
- Get a user by ID
- Add a new user
- Update an existing user
- Delete a user
- Request logging middleware
- Validation middleware for user data

---

## Sample User Object

```json
{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}
```

## Project Structure
.
├── data.js                // In-memory user list
├── middleware/
│   ├── logger.js          // Request logging middleware
│   └── validator.js       // POST/PUT request body validation
├── server.js              // Main Express application
├── package.json
├── package-lock.json


## Getting Started

Prerequisites
Node.js (v18 or above)

## Running the Server
node server.js
The server will start at: http://localhost:3000

## Libraries Used
express	Web framework for building RESTful APIs
npm install express

## API Endpoints

-- GET /users
Fetch all users.

-- GET /users/:id
Fetch a specific user by ID.

-- POST /users
Add a new user.

Required fields: firstName, lastName, hobby

-- PUT /users/:id
Update user data by ID.

Required fields: firstName, lastName, hobby

-- DELETE /users/:id
Delete a user by ID.

## Middleware

-- Logger
-- Logs every request with:

## HTTP method
GET, POST, PUT, DELETE

## URL
-- http://localhost:3000/users


## Status code
Return appropriate HTTP status codes (e.g., 200, 404, 201, 400).

## Validator
Ensures required fields are present in POST and PUT requests.

## Testing
Use Postman or Thunder Client to test each endpoint.
```


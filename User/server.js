import express from "express";
import { users } from "./data.js"; // In-memory data store
import { validateUser } from "./middleware/validator.js"; // Middleware to validate request body
import requestLogger from "./middleware/logger.js"; // Middleware to log each request

const app = express();
const PORT = 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Middleware to parse JSON request bodies
app.use(express.json());

// Custom logging middleware
app.use(requestLogger);

// =======================
// GET all users
// Endpoint: GET /users
// =======================
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// ===========================
// GET a specific user by ID
// Endpoint: GET /user/:id
// ===========================
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: `user not found with id ${id}` });
  }

  res.status(200).json(user);
});

// ===========================
// Create a new user
// Endpoint: POST /user
// Body must include: firstName, lastName, hobby
// ===========================
app.post("/users", validateUser, (req, res) => {
  const newUser = {
    id: Date.now().toString(), // Generate unique ID using timestamp
    ...req.body,
  };

  users.push(newUser);
  res.status(201).json({ message: "User created", user: newUser });
});

// ===========================
// Delete a user by ID
// Endpoint: DELETE /user/:id
// ===========================
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "user not found " });
  }

  users.splice(index, 1); // Remove the user
  res.status(200).json({ message: "User deleted" });
});

// ===========================
// Update a user by ID
// Endpoint: PUT /user/:id
// Body must include: firstName, lastName, hobby
// ===========================
app.put("/users/:id", validateUser, (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "user not found" });
  }

  // Update the user
  users[index] = { id, ...req.body };
  res.status(200).json({ message: "User updated", user: users[index] });
});

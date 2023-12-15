// Create web server

// Import express
const express = require("express");
// Import router
const commentsRouter = express.Router();
// Import comments controller
const commentsController = require("../controllers/commentsController");
// Import auth middleware
const auth = require("../middlewares/auth");

// Get all comments
commentsRouter.get("/", commentsController.getAll);

// Get comment by id
commentsRouter.get("/:id", commentsController.getById);

// Create a comment
commentsRouter.post("/", auth, commentsController.create);

// Update a comment
commentsRouter.put("/:id", auth, commentsController.update);

// Delete a comment
commentsRouter.delete("/:id", auth, commentsController.delete);

// Export router
module.exports = commentsRouter;

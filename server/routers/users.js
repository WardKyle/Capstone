import { Router } from "express";
import User from "../models/User.js";

const router = Router();

//POST request for User
router.post("/", async (request, response) => {
  try {
    const newUser = new User(request.body);
    const data = await newUser.save();
    response.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json(error.errors);
  }
});

// GET request for all users
router.get("/", async (request, response) => {
  try {
    const query = request.query;
    const data = await User.find(query);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// GET request for a single user by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await User.findById(request.params.id);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// DELETE request for a single user by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await User.findByIdAndRemove(request.params.id, {});
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// PUT reqeust to update a single user by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const data = await User.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          username: body.username,
          password: body.password
        }
      },
      {
        new: true
      }
    );
    response.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json(error.errors);
  }
});

export default router;

import { Router } from "express";
import Database from "../models/Database.js";
const router = Router();

//POST request for database
router.post("/", async (request, response) => {
  try {
    const newDatabase = new Database(request.body);
    const data = await newDatabase.save();
    response.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json(error.errors);
  }
});

// GET request for all database entries
router.get("/", async (request, response) => {
  try {
    const query = request.query;
    const data = await Database.find(query);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// GET request for a single database entrie by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Database.findById(request.params.id);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// DELETE request for a single database entry by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Database.findByIdAndRemove(request.params.id, {});
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// PUT reqeust to update a single database entry by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const data = await Database.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          user_id: body.user_id,
          username: body.username,
          platform: body.platform,
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

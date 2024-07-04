import express from "express";

import { createUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

//CRUD - Create (POST request), Read (GET request), Update (put, patch, update request/s), Delete (DELETE request)

//Create - Post request
//http://localhost:5000/create-user
router.post("/create-user", createUser);

//Get users
//http://localhost:5000/get-users
router.get("/get-users", getUsers);

export default router;

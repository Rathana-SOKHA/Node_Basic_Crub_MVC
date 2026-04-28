import express from "express";
const router = express.Router();


import { UserController } from "../controllers/userController.js";
const userController = new UserController();

router.get("/users", (req, res) => userController.index(req, res));
router.post("/users", (req, res) => userController.create(req, res));
router.get("/users/:id", (req, res) => userController.getUser(req, res));
router.put("/users/:id", (req, res) => userController.update(req, res));
router.delete("/users/:id", (req, res) => userController.delete(req, res));


export default router;

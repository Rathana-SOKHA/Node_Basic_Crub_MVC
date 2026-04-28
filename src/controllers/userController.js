import { UserModel } from "../models/userModel.js";


export class UserController {
    async index(req, res) {
        try {
            const results = await UserModel.getAllUsers();
            res.status(200).json({
                userList: results,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async create(req, res) {
        try {
            const { name } = req.body;
            const newUser = await UserModel.createUser(name);
            res.status(201).json({
                message: "User created successfully",
                user: newUser,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await UserModel.getUser(id);
            if (user) {
                res.status(200).json({
                    user,
                });
            } else {
                res.status(404).json({
                    message: "User not found",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const updatedUser = await UserModel.updateUser(id, name);
            res.status(200).json({
                message: "User updated successfully",
                user: updatedUser,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const result = await UserModel.deleteUser(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
    
}

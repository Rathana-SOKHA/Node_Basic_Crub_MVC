import { UserModel } from "../models/userModel.js";
import { BaseController } from "./BaseController.js";

export class UserController extends BaseController {
    async index(req, res) {
        try {
            const results = await UserModel.getAllUsers();
            this.success(
                res, 200, 
                "Users fetched successfully", 
                results
            );

        } catch (error) {
            this.error(
                res, 500, 
                error.message
            );
        }
    }

    async create(req, res) {
        try {
            const { name } = req.body;
            const newUser = await UserModel.createUser(name);
            this.success(
                res, 201, 
                "User created successfully", 
                newUser
            );

        } catch (error) {
            this.error(
                res, 500, 
                error.message
            );
        }
    }

    async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await UserModel.getUser(id);
            this.success(
                res, 200, 
                "User found", 
                user
            );

        } catch (error) {
            this.error(
                res, 500, 
                error.message
            );
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const updatedUser = await UserModel.updateUser(id, name);
            this.success(
                res, 200, 
                "User updated successfully", 
                updatedUser
            );

        } catch (error) {
            this.error(
                res, 500, 
                error.message
            );
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const result = await UserModel.deleteUser(id);
            this.success(
                res, 200, 
                "User deleted successfully", 
                result
            );

        } catch (error) {
            this.error(
                res, 500, 
                error.message
            );
        }
    }
}

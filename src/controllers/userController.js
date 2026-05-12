import { BaseController } from "./BaseController.js";
import { UserService } from "../services/UserService.js";

export class UserController extends BaseController {

    async index(req, res) {
        try {
            const users = await UserService.getAllUsers();
            this.success(
                res,
                200,
                "Users fetched successfully",
                users
            );

        } catch (error) {
            this.error(
                res,
                500,
                error.message
            );
        }
    }

    async create(req, res) {
        try {
            const { name, email } = req.body;
            const newUser =await UserService.createUser(name, email);

            this.success(
                res,
                201,
                "User created successfully",
                newUser
            );

        } catch (error) {
            this.error(
                res,
                500,
                error.message
            );
        }
    }

    async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.getUser(id);
            this.success(
                res,
                200,
                "User found",
                user
            );

        } catch (error) {
            this.error(
                res,
                500,
                error.message
            );
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const updatedUser = await UserService.updateUser(id, name, email);
            this.success(
                res,
                200,
                "User updated successfully",
                updatedUser
            );

        } catch (error) {
            this.error(
                res,
                500,
                error.message
            );
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const result = await UserService.deleteUser(id);
            this.success(
                res,
                200,
                "User deleted successfully",
                result
            );

        } catch (error) {
            this.error(
                res,
                500,
                error.message
            );
        }
    }
}


import { UserRepository } from "../repositories/UserRepository.js";

export class UserService {

    static async getAllUsers() {
        return await UserRepository.findAll();
    }

    static async createUser(name, email) {
        const existingUser =
            await UserRepository.findByEmail(email);

        if (existingUser) {
            throw new Error("EMAIL_ALREADY_EXISTS");
        }

        return await UserRepository.create(name, email);
    }

    static async getUser(id) {
        const user = await UserRepository.findById(id);

        if (!user) {
            throw new Error("USER_NOT_FOUND");
        }

        return user;
    }

    static async updateUser(id, name, email) {
        const existingUser = await UserRepository.findById(id);

        if (!existingUser) {
            throw new Error("USER_NOT_FOUND");
        }

        return await UserRepository.update(id, name, email);
    }

    static async deleteUser(id) {
        const existingUser = await UserRepository.findById(id);

        if (!existingUser) {
            throw new Error("USER_NOT_FOUND");
        }

        return await UserRepository.delete(id);
    }
}


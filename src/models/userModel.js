

import { BaseModel } from "./BaseModel.js";

export class UserModel extends BaseModel {
    static async getAllUsers() {
        return await this.query("SELECT * FROM users");
    }

    static async createUser(name) {
        const sqlInsert = "INSERT INTO users (name) VALUES (?)";
        const result = await this.query(sqlInsert, [name]);
        return { id: result.insertId, name };
    }

    static async getUser(id) {
        const sqlGetUser = "SELECT * FROM users WHERE id = ?";
        const result = await this.query(sqlGetUser, [id]);
        return result[0];
    }

    static async updateUser(id, name) {
        const sqlUpdate = "UPDATE users SET name = ? WHERE id = ?";
        await this.query(sqlUpdate, [name, id]);
        return { id, name };
    }

    static async deleteUser(id) {
        const sqlDelete = "DELETE FROM users WHERE id = ?";
        await this.query(sqlDelete, [id]);
        return { id };
    }
}





import db from "../config/db.js";


export class UserModel {
    static async getAllUsers() {
        const sqlGetAll = "SELECT * FROM users";
        const [result] = await db.query(sqlGetAll);
        return result;
    }

    static async createUser(name) {
        const sqlInsert = "INSERT INTO users (name) VALUES (?)";
        const [result] = await db.query(sqlInsert, [name]);
        return { id: result.insertId, name };
    }

    static async getUser(id) {
        const sqlGetUser = "SELECT * FROM users WHERE id = ?";
        const [result] = await db.query(sqlGetUser, [id]);
        return result[0];
    }

    static async updateUser(id, name) {
        const sqlUpdate = "UPDATE users SET name = ? WHERE id = ?";
        await db.query(sqlUpdate, [name, id]);
        return { id, name };
    }

    static async deleteUser(id) {
        const sqlDelete = "DELETE FROM users WHERE id = ?";
        await db.query(sqlDelete, [id]);
        return { message: "User deleted successfully" };
    }
}





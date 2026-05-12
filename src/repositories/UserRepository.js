import { BaseModel } from "../models/BaseModel.js";

export class UserRepository extends BaseModel {

    static async findAll() {
        return await this.query("SELECT * FROM users");
    }

    static async findByEmail(email) {

        const sql = "SELECT * FROM users WHERE email = ?";
        const result = await this.query(sql, [email]);
        return result[0];
    }

    static async findById(id) {
        const sql = "SELECT * FROM users WHERE id = ?";
        const result = await this.query(sql, [id]);
        return result[0];
    }

    static async create(name, email) {
        const sql = "INSERT INTO users(name, email) VALUES(?, ?)";
        const result = await this.query(sql, [name, email]);
        return {id: result.insertId, name, email};
    }

    static async update(id, name, email) {
        const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
        await this.query(sql, [name, email, id]);
        return {id, name, email};
    }

    static async delete(id) {
        const sql = "DELETE FROM users WHERE id = ?";
        await this.query(sql, [id]);
        return { id };
    }
}
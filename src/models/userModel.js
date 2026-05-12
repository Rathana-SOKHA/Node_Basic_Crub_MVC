

// import { BaseModel } from "./BaseModel.js";

// export class UserModel extends BaseModel {
//     static async getAllUsers() {
//         return await this.query("SELECT * FROM users");
//     }

//     static async getUserByEmail(email) {
//         const sqlGetUserByEmail = "SELECT * FROM users WHERE email = ?";
//         const result = await this.query(sqlGetUserByEmail, [email]);
//         return result[0];
//     }

//     static async createUser(name, email) {
//         const sqlInsert = "INSERT INTO users (name, email) VALUES (?, ?)";
//         const result = await this.query(sqlInsert, [name, email]);
//         return { id: result.insertId, name, email };
//     }

//     static async getUser(id) {
//         const sqlGetUser = "SELECT * FROM users WHERE id = ?";
//         const result = await this.query(sqlGetUser, [id]);
//         return result[0];
//     }

//     static async updateUser(id, name, email) {
//         const sqlUpdate = "UPDATE users SET name = ?, email = ? WHERE id = ?";
//         await this.query(sqlUpdate, [name, email, id]);
//         return { id, name, email };
//     }

//     static async deleteUser(id) {
//         const sqlDelete = "DELETE FROM users WHERE id = ?";
//         await this.query(sqlDelete, [id]);
//         return { id };
//     }
// }





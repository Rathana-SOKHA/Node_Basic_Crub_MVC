
import db from "../config/db.js";

export class BaseModel {

    // Shared database query method for all child classes
    static async query(sql, params) {
        try {
            const [rows] = await db.execute(sql, params);
            return rows;
        } catch (error) {
            console.error("Database query failed:", error.message);
            throw error;
        }
    }
}




import express from "express";
import db from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

import userRoute from "./routes/userRoute.js"

const app = express();
app.use(express.json());

app.use("/api", userRoute);

export default app;



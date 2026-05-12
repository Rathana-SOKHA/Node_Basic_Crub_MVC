import express from "express";
import db from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import userRoute from "./routes/userRoute.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoute);

export default app;



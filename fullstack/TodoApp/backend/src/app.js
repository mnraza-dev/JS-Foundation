import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import todoRouter from "./routes/todo.js";

import cors from "cors"
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use("/api/v1/todo", todoRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routes/User";
import driveRouter from "./Routes/Drive";
let cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const db_connection_url = process.env.DB_URL || "";

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/drive", driveRouter);

mongoose.connect(db_connection_url);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

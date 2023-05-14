import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRouter from "./Routes/Book";
import nicheRouter from "./Routes/Niche";
import toneRouter from "./Routes/Tone";
import userRouter from "./Routes/User";
import planRouter from "./Routes/Plan";
let cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const db_connection_url = process.env.DB_URL || "";

app.use(express.json());
app.use(cors());
app.use("/api/book", bookRouter);
app.use("/api/niche", nicheRouter);
app.use("/api/tone", toneRouter);
app.use("/api/user", userRouter);
app.use("/api/plan", planRouter);

mongoose.connect(db_connection_url);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

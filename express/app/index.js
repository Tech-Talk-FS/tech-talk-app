import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./db/config.js";
import postRouter from "./api/routes/postRoutes.js";
import ApiError from "./api/errors/ApiError.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api_v1/posts", postRouter);

app.get("/api_v1", async (req, res) => {
  console.log("Requested pulse");
  res.status(200).json("Server is up");
});


app.use((err, req, res) => {
  if (err instanceof ApiError) return res.status(err.status).json({message: err.message});
  console.error("Final error", err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;

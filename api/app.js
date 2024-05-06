import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.routes.js";
import { config } from "dotenv";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
config({ path: ".env" });

//routes
app.use("/api/auth", authRoute);

// Start the server
app.listen(8800, () => {
  console.log(`Server is running `);
});

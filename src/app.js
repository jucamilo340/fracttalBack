import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employees.routes.js";

const app = express();
dotenv.config();
const FRONTEND_URL = process.env.FRONTEND_URL || 3000;
app.use(
    cors({
      credentials: true,
      origin: FRONTEND_URL,
    })
  );
  app.use(express.json());
  app.use("/api/auth", authRoutes);
  app.use("/api", employeeRoutes);

export default app;
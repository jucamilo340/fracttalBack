import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employees.routes.js";

const app = express();
dotenv.config();
app.use(
    cors({
      credentials: true,
      origin: "*",
    })
  );
  app.use(express.json());
  app.use("/api/auth", authRoutes);
  app.use("/api", employeeRoutes);

export default app;
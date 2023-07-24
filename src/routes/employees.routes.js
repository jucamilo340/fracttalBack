import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createEmployeeSchema } from "../schemas/employee.schema.js";

const router = Router();

router.get("/employees", auth, getEmployees);

router.post("/employees", auth, validateSchema(createEmployeeSchema), createEmployee);

router.get("/employees/:id", auth, getEmployee);

router.put("/employees/:id", auth, updateEmployee);

router.delete("/employees/:id", auth, deleteEmployee);

export default router;
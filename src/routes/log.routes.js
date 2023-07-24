import { Router } from "express";
import {
 createLog,
 getLogs
} from "../controllers/log.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createLogSchema } from "../schemas/log.schema.js";

const router = Router();

router.get("/logs", auth, getLogs);

router.post("/log", auth, validateSchema(createLogSchema), createLog);

export default router;
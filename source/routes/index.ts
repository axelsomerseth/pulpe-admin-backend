import express, { Router } from "express";
import { indexHandler } from "../handlers/index";
import { healthCheck } from "../handlers/health";

const router: Router = express.Router();

router.get("/", indexHandler);

router.get("/health", healthCheck);

export default router;

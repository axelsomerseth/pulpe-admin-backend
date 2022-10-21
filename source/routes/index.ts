import express, { Router } from "express";
import { indexHandler } from "../handlers/index";

const router: Router = express.Router();

router.get("/", indexHandler);

export default router;

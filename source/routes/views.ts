import express, { Router } from "express";
import { viewsHandler } from "../handlers/views";

const router: Router = express.Router();

router.get("/", viewsHandler);

export default router;

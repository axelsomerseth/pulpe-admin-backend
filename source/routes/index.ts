import express, { Router } from "express";
import { indexHandler } from "../handlers/index";
import { emailHandler } from "../handlers/email";

const router: Router = express.Router();

router.get("/", indexHandler);
router.get("/test-email", emailHandler);

export default router;

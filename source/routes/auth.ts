import express, { Router } from "express";
import { signIn, getAllUsers } from "../handlers/auth";
import authenticateMiddleware from "../middlewares/authenticate";

const router: Router = express.Router();

router.post("/signin", signIn);

router.post("/login");

router.get("/logout");

router.get("/my-account");

// list all users
router.get("/get-all-persons", authenticateMiddleware, getAllUsers);

export default router;

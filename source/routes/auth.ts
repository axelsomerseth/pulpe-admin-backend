import express, { Router } from "express";
import { signUp, signIn, getAllUsers } from "../handlers/auth";
import authenticateMiddleware from "../middlewares/authenticate";

const router: Router = express.Router();

router.post("/sign-up", signUp);

router.post("/sign-in", signIn);

router.get("/sign-out");

router.get("/my-account");

// list all users
router.get("/get-all-persons", authenticateMiddleware, getAllUsers);

export default router;

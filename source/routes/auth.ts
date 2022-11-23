import express, { Router } from "express";
import {
  signUp,
  signIn,
  signOut,
  myAccount,
  getAllUsers,
} from "../handlers/auth";
import authenticateMiddleware from "../middlewares/authenticate";

const router: Router = express.Router();

router.post("/sign-up", signUp);

router.post("/sign-in", signIn);

router.get("/sign-out", signOut);

router.get("/my-account", authenticateMiddleware, myAccount);

router.get("/get-all-persons", authenticateMiddleware, getAllUsers);

export default router;

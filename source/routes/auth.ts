import express, { Router } from "express";

// TODO: complete router.

const router: Router = express.Router();

router.post("/authenticate");

router.post("/signin");

router.post("/login");

router.get("/logout");

router.get("/my-account");

// list all users
router.get("/");

export default router;

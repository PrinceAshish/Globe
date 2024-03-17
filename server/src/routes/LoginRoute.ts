import express from "express";
import { use } from "../middlewares/tryCatchMiddleware";
import { LoginControler } from "../controllers/Login";
import { isLoggedInMiddleware } from "../middlewares/isLoggedInMiddleware";

const router = express.Router();

router.post("/login-user", use(LoginControler.LogUserIn));
router.post("/logout-user", use(LoginControler.LogUserOut));
router.post("/login-check", isLoggedInMiddleware, use(LoginControler.LogUserCheck));

export default router;

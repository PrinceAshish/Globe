import express from "express";
import { use } from "../middlewares/tryCatchMiddleware";
import { LoginControler} from "../controllers/Login";

const router  = express.Router()

router.post('/login-user', use(LoginControler.LogUserIn))
router.post('/logout-user', use(LoginControler.LogUserOut))

export default router;
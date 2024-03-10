import express from "express";
import { use } from "../middlewares/tryCatchMiddleware";
import { FindByControler} from "../controllers/FindBy";

const router  = express.Router()

router.post('/find-user-email', use(FindByControler.FindUserByEmail))
router.post('/find-user-mobile', use(FindByControler.FindUserByMobileNumbaer))
router.post('/find-user-id', use(FindByControler.FindUserById))


export default router;
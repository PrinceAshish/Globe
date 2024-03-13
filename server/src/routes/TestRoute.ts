import express from "express";
import { use } from "../middlewares/tryCatchMiddleware";
import TestController from "../controllers/test";

const router  = express.Router()

router.get('/test', use(TestController))


export default router;
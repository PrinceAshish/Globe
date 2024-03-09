import express from "express";
import { use } from "../middlewares/tryCatchMiddleware";
import { UserControler } from "../controllers/user";

const router  = express.Router()

router.get('/get-user', use(UserControler.getUser))
router.post('/save-user', use(UserControler.createUser))
router.put('/update-user/:id',use(UserControler.editUser))
router.delete('/delete-user/:id', use(UserControler.deleteUser))


export default router;
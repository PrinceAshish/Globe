import express from "express";
import { use } from "../middlewares/tryCatchMiddleware";
import { FlightControler} from "../controllers/Flight";

const router  = express.Router()

router.post('/search-flight', use(FlightControler.SearchFlight))
router.post('/save-history-flight', use(FlightControler.getHistoryFlight))
router.post('/get-history-flight', use(FlightControler.saveFlight))


export default router;
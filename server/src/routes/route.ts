import { Router } from "express";
import UserRoute from "./user";
import FindByRoute from "./FindByRoute";
import TestRoute from "./TestRoute";
import LoginRoute from "./LoginRoute";
import FlightRoute from "./FlightRoute";
import { isLoggedInMiddleware } from "../middlewares/isLoggedInMiddleware";
// import FlightHistoryRoute from './FlightHistoryRoute';

const Allroutes = Router();

Allroutes.use(UserRoute);
Allroutes.use(FindByRoute);
Allroutes.use(TestRoute);
Allroutes.use(LoginRoute);
Allroutes.use(FlightRoute);
// Allroutes.use('/api',FlightHistoryRoute)

export default Allroutes;

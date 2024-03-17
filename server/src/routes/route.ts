import { Router } from 'express';
import UserRoute from './user';
import FindByRoute from './FindByRoute';
import TestRoute from './TestRoute';
import LoginRoute from './LoginRoute';
import FlightRoute from './FlightRoute';
// import FlightHistoryRoute from './FlightHistoryRoute';

const Allroutes = Router();

Allroutes.use('/api',UserRoute)
Allroutes.use('/api',FindByRoute)
Allroutes.use('/api',TestRoute)
Allroutes.use('/api',LoginRoute)
Allroutes.use('/api',FlightRoute)
// Allroutes.use('/api',FlightHistoryRoute)

export default Allroutes;
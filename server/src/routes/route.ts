import { Router } from 'express';
import UserRoute from './user';
import FindByRoute from './FindByRoute';
import TestRoute from './TestRoute';
import LoginRoute from './LoginRoute';

const Allroutes = Router();

Allroutes.use('/api',UserRoute)
Allroutes.use('/api',FindByRoute)
Allroutes.use('/api',TestRoute)
Allroutes.use('/api',LoginRoute)

export default Allroutes;
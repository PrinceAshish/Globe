import { Router } from 'express';
import UserRoute from './user';
import FindByRoute from './FindByRoute';
import TestRoute from './TestRoute';

const Allroutes = Router();

Allroutes.use('/api',UserRoute)
Allroutes.use('/api',FindByRoute)
Allroutes.use('/api',TestRoute)

export default Allroutes;
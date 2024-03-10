import { Router } from 'express';
import UserRoute from './user';
import FindByRoute from './FindByRoute';

const Allroutes = Router();

Allroutes.use('/api',UserRoute)
Allroutes.use('/api',FindByRoute)

export default Allroutes;
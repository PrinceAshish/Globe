// globalVariables.ts
import { Request, Response,NextFunction } from 'express';
import { CustomRequest } from '../utils/types';

const globalVariablesMiddleware = (req: CustomRequest, res:Response, next:NextFunction) => {
  console.log("i am in top of file , ",req.session.userId);
  res.locals.currentUser = req.user;
  next();
};

export default globalVariablesMiddleware;
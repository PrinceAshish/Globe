import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import globalVariablesMiddleware from '../middlewares/globalVariables';
import errorMiddleware from '../middlewares/errorMiddleware';
import Allroutes from '../routes/route';
import session from 'express-session';

export const configureMiddleware = (app: express.Application) => {
  const secret = process.env.SECRET as string;
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  
    app.use(cors());
    app.use(helmet());
    app.use(
      session({
        secret: secret,
        resave: false,
        saveUninitialized: true,
      })
    );
    
    // app.use(morgan('combined')); for production build
    
    app.use(cookieParser());
    
    app.use(globalVariablesMiddleware as any)
    app.use("/api",Allroutes);
    app.use(errorMiddleware)
  
  };
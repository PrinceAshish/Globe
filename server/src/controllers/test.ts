import {Request,Response} from 'express'
import sendApiResponse from "../middlewares/sendApiResponse";

const test = async (req: Request, res: Response) => {
  console.log("hello world");
  sendApiResponse(res,200,true,'You Got this',[])
};

export default test;

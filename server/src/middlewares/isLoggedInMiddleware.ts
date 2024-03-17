import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import sendApiResponse from "./sendApiResponse";
import { CustomRequest } from "../utils/types";
import { PrismaClient } from "@prisma/client";

const secret = process.env.SECRET as string;
const prisma = new PrismaClient();
const isLoggedInMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    return sendApiResponse(res, 401, false, "Denied Access to this Route", []);
  }
  try {
    const decodedToken: any = jwt.verify(token.split(" ")[1], secret);
    const isTokenValid = await  prisma.user.findUnique({
        where:{
            id: decodedToken.userId
        }
    })
    if(isTokenValid?.token !== token.split(" ")[1]){
        return  sendApiResponse(res, 401, false, "Unauthorized Access", []);
    }
    next();
  } catch (error) {
    // console.error("Error verifying token:", error);
    return sendApiResponse(res, 401, false, "Invalid token", []);
  }
};

export { isLoggedInMiddleware };

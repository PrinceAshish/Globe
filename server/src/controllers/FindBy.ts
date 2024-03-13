import { Request, Response } from "express";
import sendApiResponse from "../middlewares/sendApiResponse";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const FindUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return sendApiResponse(res, 200, false, " Email is required", []);
  }
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  if(user){
    sendApiResponse(res, 200, true, "User exist on this email", user);
  }else{
    sendApiResponse(res, 200, false, "User dose not exist on this email", user);
  }
};

const FindUserByMobileNumbaer = async (req: Request, res: Response) => {
  const { mobile_number } = req.body;
  if (!mobile_number) {
    return sendApiResponse(res, 200, false, " Mobile Number is required", []);
  }
  const user = await prisma.user.findUnique({
    where: { mobile_number: mobile_number },
  });
  if(user){
    sendApiResponse(res, 200, true, "User exist on this Mobile Number", user);
  }else{
    sendApiResponse(res, 200, false, "User dose not exist on this Mobile ", user);
  }
};
const FindUserById = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) {
    return sendApiResponse(res, 200, false, " Id is required", []);
  }
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  if(user){
    sendApiResponse(res, 200, true, "User exist on this id", user);
  }else{
    sendApiResponse(res, 200, false, "User dose exist on this id  ", user);
  }
};
export const FindByControler = {
  FindUserByEmail,
  FindUserByMobileNumbaer,
  FindUserById
};

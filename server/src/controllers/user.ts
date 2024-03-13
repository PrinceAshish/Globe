import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import sendApiResponse from "../middlewares/sendApiResponse";
import { isUserExist} from './common'
import { ConverthashPassword } from "../utils/hashPassword";

const prisma = new PrismaClient();

const getUser = async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();
  sendApiResponse(res, 200, true, 'User Fetch SuccessFully', user);
};

const createUser = async (req: Request, res: Response) => {
  const { first_name, last_name, email, password, mobile_number } = req.body;

  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "password",
    "mobile_number",
  ];
  const missingField = requiredFields.find((field) => !req.body[field]);

  if (missingField) {
    return sendApiResponse(res, 200, false, `${missingField} is required`, []);
  }
  if(await isUserExist("email",email)){
    sendApiResponse(res, 200, false, 'User exists with this email', []);
  }

  let newPassword =  await ConverthashPassword(password)
  const user = await prisma.user.create({
    data: {
      first_name,
      last_name,
      email,
      password:newPassword,
      mobile_number,
    },
  });
  sendApiResponse(res, 201, true, "User Added SuccessFully", user);
};

const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, mobile_number } = req.body;

  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "password",
    "mobile_number",
  ];
  const missingField = requiredFields.find((field) => !req.body[field]);

  if (missingField) {
    return sendApiResponse(res, 200, false, `${missingField} is required`, []);
  }
  if(await isUserExist("id",id)){
    sendApiResponse(res, 200, false, 'User not found with id', []);
  }
  if(await isUserExist("email",email)){
    sendApiResponse(res, 200, false, 'User exists with this email', []);
  }
  let newPassword =  await ConverthashPassword(password)
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      first_name,
      last_name,
      email,
      password:newPassword,
      mobile_number,
    },
  });
  sendApiResponse(res, 201, true, 'User Updates SuccessFully !', user);
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if(!id){
    sendApiResponse(res, 200, false, 'id is Required', []);
  }
  if(await isUserExist("id",id)){
    sendApiResponse(res, 200, false, 'User not found with id', []);
  }
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  
  sendApiResponse(res, 200, true, 'Delete User SuccessFully', user);
};

export const UserControler = {
  getUser,
  createUser,
  editUser,
  deleteUser,
};

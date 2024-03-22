import { Request, Response } from "express";
import sendApiResponse from "../middlewares/sendApiResponse";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../utils/types";

const secret = process.env.SECRET as string;
const prisma = new PrismaClient();

const LogUserIn = async (req: CustomRequest, res: Response) => {
  const { email, password } = req.body;
  const requiredFields = ["email", "password"];
  const missingField = requiredFields.find((field) => !req.body[field]);

  if (missingField) {
    return sendApiResponse(res, 200, false, `${missingField} is required`, []);
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return sendApiResponse(res, 200, false, "Invalid credentials", {});
  }
  req.cookies.userId = user.id;
  console.log(req.cookies);
  const token = jwt.sign({ userId: user?.id }, secret, {
    expiresIn: "7d",
  });
  const tokenAdded = await prisma.user.update({
    where: { id: user.id },
    data: {
      token: token,
    },
  });
  sendApiResponse(res, 200, true, "Login SuccessFully", token);
};

const LogUserOut = async (req: CustomRequest, res: Response) => {
  const id = req.session.userId as string;
  console.log(id);
  const user = await prisma.user.update({
    where: { id: id },
    data: {
      token: '',
    },
  });
  req.session.destroy((err) => {
    if (err) {
      return sendApiResponse(res, 200, true, "Error logging out", {});
    } else {
      return sendApiResponse(res, 200, true, "Logout successfull", {}, true);
    }
  });
};

const LogUserCheck = async (req: Request, res: Response) => {
  return sendApiResponse(res, 200, true, "Your Authorizerd User ", {});
};
export const LoginControler = {
  LogUserIn,
  LogUserOut,
  LogUserCheck,
};

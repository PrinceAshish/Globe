import { Request, Response } from "express";
import sendApiResponse from "../middlewares/sendApiResponse";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "process";
import { CustomRequest } from "../utils/types";

const prisma = new PrismaClient();

const LogUserIn = async (req: CustomRequest, res: Response) => {
  // const secret = process.env.SECRET as string;
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    sendApiResponse(res, 200, false, "Invalid credentials", {});
  }
  // req.session.userId = user?.id as string;

  // const token = jwt.sign({ userId: user?.id }, secret, {
  //   expiresIn: "1d",
  // });
  sendApiResponse(res, 200, true, "Login SuccessFully", { user: user });
};
const LogUserOut = async (req: Request, res: Response) => {
  // req.session.destroy((err) => {
  //   if (err) {
  //     return res.status(500).json({ message: "Logout failed" });
  //   }
  //   res.clearCookie("All");
  // });
  sendApiResponse(res, 200, true, "Logout successfull", {});
};
export const LoginControler = {
  LogUserIn,
  LogUserOut,
};

import { Request } from "express";

export type CustomRequest = Request & {
  user?: String;
  session?: string;
};
export type TokenType = {
  id?: string;
};
export type EMAILType = {
  email?: string;
  subject?: string;
  text?: string;
  [name: string]: any;
};

export type ApiResponse = {
  status: boolean;
  message: string;
  data: any;
};

export type UserType = "id" |"first_name" | "last_name" | "email" | "mobile_number" | "password";

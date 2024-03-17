import { Response } from "express";
import { HttpStatusCode } from "../utils/enum";
import { ApiResponse } from "../utils/types";

const sendApiResponse = (
  res: Response,
  statusCode: HttpStatusCode,
  status: boolean,
  message: string,
  data: any,
  clearCookie = false
): void => {
  const response: ApiResponse = { status, message, data };
  if (clearCookie) {
    res.status(statusCode).clearCookie("All").json(response);
  } else {
    res.status(statusCode).json(response);
  }
};

export default sendApiResponse;

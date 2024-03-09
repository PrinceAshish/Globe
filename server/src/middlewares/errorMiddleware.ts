import express from "express";
import sendApiResponse from "./sendApiResponse";
import { Prisma } from "@prisma/client";

const errorMiddleware = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!err.message) err.message = "Oh No, Something Went Wrong! ashish";
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return sendApiResponse(res, 400, false, "Invalid request ashish", []);
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    return sendApiResponse(res, 422, false, "Validation error ashish", []);
  } else {
    // Handle other unexpected errors
    console.error("Unexpected error:", err);
    return sendApiResponse(res, 500, false, "Error in Prisma ashish", []);
  }
};

export default errorMiddleware;

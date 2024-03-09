import { Response } from 'express';

enum HttpStatusCode {
  OK = 200,
  Created = 201,
  InvalidRequest= 400,
  NotFound = 404,
  InternalServerError= 500,
  ValidationError= 422,
  // Add more as needed
}

interface ApiResponse {
  status: boolean;
  message: string;
  data: any;
}

 const sendApiResponse = (
  res: Response,
  statusCode: HttpStatusCode,
  status: boolean,
  message: string,
  data: any
): void => {
  const response: ApiResponse = { status, message ,data };

  res.status(statusCode).json(response);
};

export default sendApiResponse;
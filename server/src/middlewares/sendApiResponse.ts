import { Response } from 'express'
import { HttpStatusCode } from '../utils/enum'
import { ApiResponse } from '../utils/types';

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
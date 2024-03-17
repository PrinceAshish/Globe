import { Request, Response } from "express";
import sendApiResponse from "../middlewares/sendApiResponse";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SearchFlight = async (req: Request, res: Response) => {
  const { from_city, to_city, start_date, end_date } = req.body;
  const requiredFields = ["from_city", "to_city", "start_date", "end_date"];
  const missingField = requiredFields.find((field) => !req.body[field]);

  if (missingField) {
    return sendApiResponse(res, 200, false, `${missingField} is required`, []);
  }

  const flight = await prisma.flight.findMany({
    where: {
      flightStartFrom: from_city,
      flightEndFrom: to_city,
      flightStartDate: start_date,
      flightEndDate: end_date,
    },
  });
  //   console.log(flight)
  if (flight.length) {
    sendApiResponse(res, 200, true, "SearchFlight", flight);
  } else {
    sendApiResponse(
      res,
      200,
      false,
      "We Don't have Search Flight For Now",
      flight
    );
  }
};
const getHistoryFlight = async (req: Request, res: Response) => {
  const { id} = req.body;
  // const missingField = requiredFields.find((field) => !req.body[field]);

  if (id) {
    return sendApiResponse(res, 200, false, `id is required`, []);
  }

  const flight = await prisma.flightHistory.findMany({
    where: {
      userId: id,
    },
  });
  //   console.log(flight)
  if (flight.length) {
    sendApiResponse(res, 200, true, "data fetch", flight);
  } else {
    sendApiResponse(
      res,
      200,
      false,
      "We Don't have Search Flight For Now",
      flight
    );
  }
};
const saveFlight = async (req: Request, res: Response) => {
  const {
    id,
    departureFrom,
    landFrom,
    departureTime,
    landingTime,
    flightName,
    travelDate,
    gateNo,
    seatNo,
  } = req.body;
  const requiredFields = ["id"];
  const missingField = requiredFields.find((field) => !req.body[field]);

  if (missingField) {
    return sendApiResponse(res, 200, false, `${missingField} is required`, []);
  }

  const flight = await prisma.flightHistory.create({
    data: {
      userId: id,
      departureFrom,
      landFrom,
      departureTime,
      landingTime,
      flightName,
      travelDate,
      gateNo,
      seatNo,
    },
  });
  //   console.log(flight)
  if (flight) {
    sendApiResponse(res, 200, true, "Flight added into Hsitory", flight);
  } else {
    sendApiResponse(
      res,
      200,
      false,
      "We Don't have Search Flight For Now",
      flight
    );
  }
};
export const FlightControler = {
  SearchFlight,
  getHistoryFlight,
  saveFlight,
};

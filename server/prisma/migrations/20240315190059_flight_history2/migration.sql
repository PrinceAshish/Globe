-- CreateTable
CREATE TABLE "FlightHistory" (
    "id" TEXT NOT NULL,
    "departureFrom" TEXT NOT NULL,
    "landFrom" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "landingTime" TEXT NOT NULL,
    "flightName" TEXT NOT NULL,
    "travelDate" TEXT NOT NULL,
    "gateNo" TEXT NOT NULL,
    "seatNo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlightHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FlightHistory" ADD CONSTRAINT "FlightHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

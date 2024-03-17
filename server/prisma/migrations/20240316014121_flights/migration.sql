/*
  Warnings:

  - Added the required column `updatedAt` to the `PaymentMethod` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PaymentMethod" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Flight" (
    "id" TEXT NOT NULL,
    "flightName" TEXT NOT NULL,
    "flightNumber" TEXT NOT NULL,
    "flightReview" DOUBLE PRECISION NOT NULL,
    "flightStartFrom" TEXT NOT NULL,
    "flightEndFrom" TEXT NOT NULL,
    "flightStartTime" TEXT NOT NULL,
    "flightEndTime" TEXT NOT NULL,
    "flightTravelType" TEXT NOT NULL,
    "flightPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - Added the required column `flightEndDate` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flightStartDate` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flight" ADD COLUMN     "flightEndDate" TEXT NOT NULL,
ADD COLUMN     "flightStartDate" TEXT NOT NULL;

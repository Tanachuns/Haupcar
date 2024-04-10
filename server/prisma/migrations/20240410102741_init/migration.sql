-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "registerNo" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "notes" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

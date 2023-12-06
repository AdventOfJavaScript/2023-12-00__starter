/*
  Warnings:

  - You are about to drop the `Pairings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pairings" DROP CONSTRAINT "Pairings_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Pairings" DROP CONSTRAINT "Pairings_personId_fkey";

-- DropForeignKey
ALTER TABLE "Pairings" DROP CONSTRAINT "Pairings_santaId_fkey";

-- DropTable
DROP TABLE "Pairings";

-- CreateTable
CREATE TABLE "Pairing" (
    "id" SERIAL NOT NULL,
    "eventId" TEXT NOT NULL,
    "santaId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pairing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pairing" ADD CONSTRAINT "Pairing_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pairing" ADD CONSTRAINT "Pairing_santaId_fkey" FOREIGN KEY ("santaId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pairing" ADD CONSTRAINT "Pairing_personId_fkey" FOREIGN KEY ("personId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

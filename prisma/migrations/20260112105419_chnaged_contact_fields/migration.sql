/*
  Warnings:

  - You are about to drop the column `email` on the `ContactForm` table. All the data in the column will be lost.
  - Added the required column `address` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `ContactForm` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ContactForm" DROP COLUMN "email",
ADD COLUMN     "address" TEXT NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;

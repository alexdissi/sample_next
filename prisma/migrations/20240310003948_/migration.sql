/*
  Warnings:

  - You are about to drop the column `User` on the `Post` table. All the data in the column will be lost.
  - Added the required column `author` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "User",
ADD COLUMN     "author" TEXT NOT NULL;

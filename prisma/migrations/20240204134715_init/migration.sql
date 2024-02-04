/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ShoppingItem" (
    "ItemId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "ShoppingItem_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

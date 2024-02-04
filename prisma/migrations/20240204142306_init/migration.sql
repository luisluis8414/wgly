/*
  Warnings:

  - The primary key for the `ShoppingItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ItemId` on the `ShoppingItem` table. All the data in the column will be lost.
  - Added the required column `itemId` to the `ShoppingItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ShoppingItem" (
    "itemId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL
);
INSERT INTO "new_ShoppingItem" ("name", "quantity") SELECT "name", "quantity" FROM "ShoppingItem";
DROP TABLE "ShoppingItem";
ALTER TABLE "new_ShoppingItem" RENAME TO "ShoppingItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

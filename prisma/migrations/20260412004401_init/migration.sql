/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FileOnPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ViewOnPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Views` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FileOnPosts" DROP CONSTRAINT "FileOnPosts_fileImagePath_fkey";

-- DropForeignKey
ALTER TABLE "FileOnPosts" DROP CONSTRAINT "FileOnPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_categorieId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPosts" DROP CONSTRAINT "TagsOnPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPosts" DROP CONSTRAINT "TagsOnPosts_tagId_fkey";

-- DropForeignKey
ALTER TABLE "ViewOnPosts" DROP CONSTRAINT "ViewOnPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "ViewOnPosts" DROP CONSTRAINT "ViewOnPosts_viewId_fkey";

-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "FileOnPosts";

-- DropTable
DROP TABLE "Posts";

-- DropTable
DROP TABLE "Tags";

-- DropTable
DROP TABLE "TagsOnPosts";

-- DropTable
DROP TABLE "ViewOnPosts";

-- DropTable
DROP TABLE "Views";

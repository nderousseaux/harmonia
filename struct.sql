-- -------------------------------------------------------------
-- TablePlus 6.3.2(586)
--
-- https://tableplus.com/
--
-- Database: neondb
-- Generation Time: 2025-03-07 19:25:30.0000
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."lesson_tags";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."lesson_tags" (
    "lesson_id" uuid NOT NULL,
    "tag_id" uuid NOT NULL
);

DROP TABLE IF EXISTS "public"."lessons";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."lessons" (
    "id" uuid NOT NULL,
    "title" text NOT NULL,
    "description" text NOT NULL,
    "duration" text NOT NULL,
    "path" text,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."tags";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."tags" (
    "id" uuid NOT NULL,
    "text" text NOT NULL,
    PRIMARY KEY ("id")
);

ALTER TABLE "public"."lesson_tags" ADD FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE CASCADE;
ALTER TABLE "public"."lesson_tags" ADD FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE CASCADE;

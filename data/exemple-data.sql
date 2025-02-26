-- -------------------------------------------------------------
-- TablePlus 6.3.2(586)
--
-- https://tableplus.com/
--
-- Database: neondb
-- Generation Time: 2025-02-24 22:08:06.7950
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
    "isread" bool NOT NULL,
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

INSERT INTO "public"."lesson_tags" ("lesson_id", "tag_id") VALUES
('410544b2-4001-4271-9855-fec4b6a6442a', 'f5b1b4b2-4001-4271-9855-fec4b6a6442a'),
('410544b2-4001-4271-9855-fec4b6a6442a', 'dbd5ca33-f567-47d5-92f6-09a1ce951220'),
('410544b2-4001-4271-9855-fec4b6a6442a', 'b3683b7c-0e60-46d2-9701-5086897d30ee'),
('d6e15727-9fe1-4961-8c5b-ea44a9bd81aa', 'f5b1b4b2-4001-4271-9855-fec4b6a6442a'),
('d6e15727-9fe1-4961-8c5b-ea44a9bd81aa', 'dbd5ca33-f567-47d5-92f6-09a1ce951220'),
('3958dc9e-712f-4377-85e9-fec4b6a6442a', 'dbd5ca33-f567-47d5-92f6-09a1ce951220'),
('76d65c26-f784-44a2-ac19-586678f7c2f2', 'f5b1b4b2-4001-4271-9855-fec4b6a6442a'),
('76d65c26-f784-44a2-ac19-586678f7c2f2', 'dbd5ca33-f567-47d5-92f6-09a1ce951220'),
('76d65c26-f784-44a2-ac19-586678f7c2f2', 'e7c9d7f9-df6a-421f-8b2a-05fd6313c0e1'),
('cc27c14a-0acf-4f4a-a6c9-d45682c144b9', 'dbd5ca33-f567-47d5-92f6-09a1ce951220'),
('cc27c14a-0acf-4f4a-a6c9-d45682c144b9', '79d24215-6e56-4b1f-87e7-ff30b719cdfc');

INSERT INTO "public"."lessons" ("id", "title", "description", "duration", "isread") VALUES
('3958dc9e-712f-4377-85e9-fec4b6a6442a', 'Visualisation apaisante', 'Plongez dans une expérience immersive de visualisation apaisante qui vous transporte dans un univers de calme et de bien-être. Au cours de cette séance, l’instructeur vous guide pour créer des images mentales positives et sereines, favorisant ainsi une ambiance de paix intérieure. Vous serez invité à imaginer des paysages harmonieux et à percevoir les détails subtils d’un environnement apaisant, permettant de détourner votre attention des pensées stressantes. Cette pratique renforce votre capacité à visualiser des scènes réconfortantes, tout en développant votre résilience face aux défis quotidiens. En cultivant ces images porteurs de positivité, vous instaurerez une atmosphère de bien-être durable, essentielle pour nourrir votre esprit et favoriser une meilleure gestion de vos émotions.', '1215', 'f'),
('410544b2-4001-4271-9855-fec4b6a6442a', 'Respiration en pleine conscience', 'Cette séance de respiration en pleine conscience est spécialement conçue pour vous guider vers un état de calme intérieur et une meilleure reconnexion avec votre corps. Dès le début, l’instructeur vous invite à vous installer dans une position confortable, à fermer les yeux et à concentrer toute votre attention sur le mouvement naturel de votre souffle. Vous apprendrez à identifier les sensations physiques liées à chaque inspiration et expiration, et à observer ces sensations sans jugement. Au fil de la pratique, des exercices variés vous permettront de libérer les tensions accumulées, de réduire votre niveau de stress et d’améliorer votre capacité de concentration. En vous immergeant dans cette expérience, vous découvrirez comment un simple acte de respiration consciente peut transformer votre perception du stress, favoriser un bien-être durable et vous préparer à affronter vos journées avec sérénité.', '643', 't'),
('76d65c26-f784-44a2-ac19-586678f7c2f2', 'Méditation du corps et de l''esprit', 'Cette séance de méditation du corps et de l''esprit vous propose un véritable voyage intérieur, vous invitant à reconnecter vos sensations physiques à votre état mental. Guidé pas à pas, vous apprendrez à observer votre corps avec une attention bienveillante, à identifier les zones de tension et à libérer les énergies négatives. La pratique combine des techniques de respiration, un scan corporel minutieux et des exercices de relaxation mentale, pour vous permettre de retrouver un équilibre harmonieux entre le corps et l''esprit. En vous immergeant dans cette expérience, vous développerez une compréhension approfondie de vos émotions et apprendrez à vivre l’instant présent avec une clarté nouvelle, renforçant ainsi votre bien-être global.', '537', 't'),
('cc27c14a-0acf-4f4a-a6c9-d45682c144b9', 'Préparation au sommeil', 'Conçue pour préparer votre corps et votre esprit à une nuit de repos réparateur, cette séance de préparation au sommeil est une méditation longue et apaisante qui vous guide vers un état de relaxation totale. Vous serez invité à suivre des techniques de respiration profonde et des exercices de visualisation qui favorisent le lâcher-prise des tensions accumulées au cours de la journée. Progressivement, l’instructeur vous aide à calmer votre mental et à libérer les pensées stressantes, créant ainsi un rituel du soir propice à un endormissement paisible. En intégrant cette pratique à votre routine nocturne, vous constaterez une amélioration significative de la qualité de votre sommeil, vous permettant de vous réveiller avec une sensation de renouveau et d''énergie positive pour affronter la nouvelle journée.', '1932', 'f'),
('d6e15727-9fe1-4961-8c5b-ea44a9bd81aa', 'Lâcher-prise et détente', 'Cette séance de lâcher-prise et détente vous offre une méditation guidée qui permet de dissoudre les tensions mentales et physiques accumulées au fil des journées stressantes. Conçue pour libérer l''esprit et apaiser le corps, elle vous invite à explorer des techniques de relaxation profonde, telles que la respiration consciente, le scan corporel et la visualisation d’images apaisantes. Au cours de cette pratique, l’instructeur vous guide pas à pas pour identifier et relâcher les zones de tension, tout en vous encourageant à accueillir vos pensées et émotions sans jugement. Cette approche vous aide à instaurer un espace intérieur de sérénité, favorisant ainsi une harmonie entre votre corps et votre esprit et vous permettant de repartir avec une nouvelle énergie.', '932', 'f');

INSERT INTO "public"."tags" ("id", "text") VALUES
('79d24215-6e56-4b1f-87e7-ff30b719cdfc', 'Préparation au sommeil'),
('b3683b7c-0e60-46d2-9701-5086897d30ee', 'Respiration'),
('dbd5ca33-f567-47d5-92f6-09a1ce951220', 'Bien-être'),
('e7c9d7f9-df6a-421f-8b2a-05fd6313c0e1', 'Harmonie intérieure'),
('f5b1b4b2-4001-4271-9855-fec4b6a6442a', 'Réduction du stress');

ALTER TABLE "public"."lesson_tags" ADD FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE CASCADE;
ALTER TABLE "public"."lesson_tags" ADD FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE CASCADE;

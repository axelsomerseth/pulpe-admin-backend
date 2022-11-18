import { MigrationInterface, QueryRunner } from "typeorm";

class CategoryMigration1668740371045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" (
        "id" SERIAL NOT NULL,
        "name" character varying(150) NOT NULL,
        "description" text,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP,
        "deletedAt" TIMESTAMP,
        CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "category"`);
  }
}

export { CategoryMigration1668740371045 };

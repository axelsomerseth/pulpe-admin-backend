import { MigrationInterface, QueryRunner } from "typeorm";

class CategoryMigration1668740371045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" (
        "id" SERIAL NOT NULL UNIQUE,
        "name" character varying(150) NOT NULL,
        "description" text,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP,
        "deletedAt" TIMESTAMP,
        CONSTRAINT "category_id_pkey" PRIMARY KEY ("id")
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "category"`);
  }
}

export { CategoryMigration1668740371045 };

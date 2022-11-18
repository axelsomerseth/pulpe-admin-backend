import { MigrationInterface, QueryRunner } from "typeorm";

class ProductMigration1668740557066 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" (
        "id" SERIAL NOT NULL,
        "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying(150) NOT NULL,
        "description" text NOT NULL,
        "categoryId" integer NOT NULL,
        "price" integer NOT NULL,
        "stock" integer NOT NULL,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP,
        "deletedAt" TIMESTAMP,
        CONSTRAINT "PK_1812d0b221ff4d70360e1c133e3" PRIMARY KEY ("id", "uuid")
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`);
  }
}

export { ProductMigration1668740557066 };

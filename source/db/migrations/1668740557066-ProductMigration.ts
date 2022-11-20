import { MigrationInterface, QueryRunner } from "typeorm";

class ProductMigration1668740557066 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" (
        "id" SERIAL NOT NULL UNIQUE,
        "uuid" uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        "name" character varying(150) NOT NULL,
        "description" text NOT NULL,
        "categoryId" integer NOT NULL,
        "price" integer NOT NULL,
        "stock" integer NOT NULL,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP,
        "deletedAt" TIMESTAMP,
        CONSTRAINT "product_id_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`);
  }
}

export { ProductMigration1668740557066 };

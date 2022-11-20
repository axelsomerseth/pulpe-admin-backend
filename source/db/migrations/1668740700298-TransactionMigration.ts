import { MigrationInterface, QueryRunner } from "typeorm";

class TransactionMigration1668740700298 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "transaction" (
        "id" SERIAL NOT NULL UNIQUE,
        "productId" integer NOT NULL,
        "movement" integer NOT NULL,
        "quantity" integer NOT NULL,
        "type" character varying(25) NOT NULL,
        "description" text NOT NULL,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP,
        "deletedAt" TIMESTAMP,
        CONSTRAINT "transaction_id_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "transaction_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "transaction"`);
  }
}

export { TransactionMigration1668740700298 };

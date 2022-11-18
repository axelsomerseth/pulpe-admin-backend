import { MigrationInterface, QueryRunner } from "typeorm";

class TransactionMigration1668740700298 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "transaction" (
        "id" SERIAL NOT NULL,
        "productId" integer NOT NULL,
        "movement" integer NOT NULL,
        "quantity" integer NOT NULL,
        "type" character varying(25) NOT NULL,
        "description" text NOT NULL,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP,
        "deletedAt" TIMESTAMP,
        CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id")
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "transaction"`);
  }
}

export { TransactionMigration1668740700298 };

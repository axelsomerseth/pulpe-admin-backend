import { MigrationInterface, QueryRunner } from "typeorm";

class PersonMigration1668740901099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "person" (
        "id" SERIAL NOT NULL,
        "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "firstName" character varying(20),
        "middleName" character varying(20),
        "lastName" character varying(20),
        "age" integer,
        "email" character varying(50) NOT NULL,
        "phone" character varying(50),
        "password" character varying(50) NOT NULL,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP,
        "deletedAt" TIMESTAMP,
        CONSTRAINT "PK_04363ff58ec20b1c7a9f76e2495" PRIMARY KEY ("id", "uuid")
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "person"`);
  }
}

export { PersonMigration1668740901099 };
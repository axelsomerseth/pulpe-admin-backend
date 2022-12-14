import { MigrationInterface, QueryRunner } from "typeorm";

class UuidMigration1668736771045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP EXTENSION "uuid-ossp"`);
  }
}

export { UuidMigration1668736771045 };

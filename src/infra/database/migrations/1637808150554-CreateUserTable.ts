import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUserTable1637808150554 implements MigrationInterface {
  name = 'CreateUserTable1637808150554'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "user" ("user_id" uuid NOT NULL, "name" character varying NOT NULL, "username" character varying NOT NULL, "version" integer NOT NULL, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))')
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") ')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX "public"."IDX_78a916df40e02a9deb1c4b75ed"')
    await queryRunner.query('DROP TABLE "user"')
  }
}

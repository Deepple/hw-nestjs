import { MigrationInterface, QueryRunner } from "typeorm";

export class account1673860251010 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE account_status
       (
           id          serial,
           name        VARCHAR(100) NOT NULL,
           description text,
           PRIMARY KEY (id)
       );

      CREATE TABLE account_type
      (
          id          serial,
          name        VARCHAR(100) NOT NULL,
          description text,
          PRIMARY KEY (id)
      );

      CREATE TABLE account
      (
          id                serial,
          email             VARCHAR(100) NOT NULL,
          password          VARCHAR(100) NOT NULL,
          account_status_id INT          NOT NULL,
          account_type_id   INT          NOT NULL,
          created_at        timestamptz  NOT NULL,
          updated_at        timestamptz,
          deleted_at        timestamptz,
          PRIMARY KEY (id),
          FOREIGN KEY (account_status_id) REFERENCES account_status (id),
          FOREIGN KEY (account_type_id) REFERENCES account_type (id)
      );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE account_status;
      DROP TABLE account_type;
      DROP TABLE account;`,
    );
  }
}

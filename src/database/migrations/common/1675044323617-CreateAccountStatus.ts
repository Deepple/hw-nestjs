import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAccountStatus1675044323617 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE common.account_status
        (
            id   SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        )
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE common.account_status;
    `);
    }
}

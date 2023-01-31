import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAccount1675048907625 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE account.account
            (
                id                       SERIAL PRIMARY KEY,
                account_status_id        INTEGER REFERENCES _common.account_status (id),
                account_type_id          INTEGER REFERENCES _common.account_type (id),
                email                    VARCHAR(100) NOT NULL,
                password                 VARCHAR(100) NOT NULL,
                created_at               timestamptz  NOT NULL DEFAULT NOW(),
                deleted_at               timestamptz  NULL,
                last_password_changed_at timestamptz  NULL
            );
		`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE account.account;
		`);
    }
}

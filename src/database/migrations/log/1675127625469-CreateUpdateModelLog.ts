import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUpdateModelLog1675127625469 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE log.update_model_log
            (
                id          SERIAL PRIMARY KEY,
                model_id    INTEGER REFERENCES item_card.model (id),
                account_id  INTEGER REFERENCES account.account (id),
                description TEXT NULL,
                created_at  timestamptz DEFAULT NOW()
            );
		`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE log.update_model_log;
		`);
    }
}

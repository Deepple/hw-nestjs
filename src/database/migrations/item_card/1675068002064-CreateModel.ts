import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateModel1675068002064 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE item_card.model
            (
                id              SERIAL PRIMARY KEY,
                item_id         INTEGER REFERENCES item_card.item (id),
                line_id         INTEGER REFERENCES item_card.line (id),
                account_id      INTEGER REFERENCES account.account (id),
                model_code      VARCHAR(200) NOT NULL,
                thumbnail_image TEXT         NOT NULL,
                description     TEXT         NULL,
                is_deleted      BOOLEAN               DEFAULT FALSE NOT NULL,
                created_at      timestamptz  NOT NULL DEFAULT NOW(),
                deleted_at      timestamptz  NULL
            );
		`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE item_card.model;
		`);
    }
}

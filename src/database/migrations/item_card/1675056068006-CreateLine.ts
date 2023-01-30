import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLine1675056068006 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE item_card.line
            (
                id               SERIAL PRIMARY KEY,
                display_name     VARCHAR(200) NOT NULL,
                eng_display_name VARCHAR(200) NULL,
                description      TEXT         NULL,
                created_at       timestamptz  NOT NULL DEFAULT NOW(),
                updated_at       timestamptz  NULL,
                deleted_at       timestamptz  NULL
            );
		`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE item_card.line;
		`);
    }
}

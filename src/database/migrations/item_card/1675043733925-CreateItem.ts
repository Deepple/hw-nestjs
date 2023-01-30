import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateItem1675043733925 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE item_card.item
        (
            id               SERIAL PRIMARY KEY,
            brand_id         INTEGER      NOT NULL REFERENCES item_card.brand (id),
            category_id      INTEGER      NOT NULL REFERENCES common.category (id),
            display_name     VARCHAR(200) NOT NULL,
            eng_display_name VARCHAR(200) NULL,
            created_at       timestamptz  NOT NULL DEFAULT NOW(),
            updated_at       timestamptz  NULL,
            deleted_at       timestamptz  NULL
        );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE item_card.item;
    `);
    }
}

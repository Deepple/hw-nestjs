import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterBrandTableAddColumn1674804956327 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE item_card.brand
            ADD COLUMN eng_name VARCHAR(100);
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE item_card.brand DROP COLUMN eng_name;
    `);
    }
}

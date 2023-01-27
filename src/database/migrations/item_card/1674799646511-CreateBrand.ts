import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBrand1674799646511 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE item_card.brand
        (
            id   serial PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE item_card.brand;
    `);
    }
}

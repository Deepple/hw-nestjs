import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategory1675042262718 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE _common.category
            (
                id   SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL
            )
		`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE _common.category;
		`);
    }
}

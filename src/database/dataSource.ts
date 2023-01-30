import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import * as process from "process";

// require("dotenv").config({ path: process.env.NODE_ENV === "development" || process.env.NODE_ENV === undefined ? ".env.development" : ".env.production" });
require("dotenv").config({ path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development" });

export const AppDataSource = new DataSource({
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: process.env.DATABASE_SYNCHRONIZE,
    dropSchema: false,
    keepConnectionAlive: true,
    logging: process.env.NODE_ENV !== "production",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
    cli: {
        entitiesDir: "src",
        migrationsDir: "src/database/migrations",
        subscribersDir: "subscriber",
    },
} as DataSourceOptions);

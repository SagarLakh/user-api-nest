import {ConfigModule} from "@nestjs/config";
import { ConnectionOptions } from 'typeorm';

ConfigModule.forRoot();

const config: ConnectionOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    schema: process.env.DB_SCHEMA,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: './src/migrations',
    }
}

export = config;
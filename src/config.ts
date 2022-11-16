import { DataSourceOptions } from 'typeorm';

export interface ConfigConfig {
  /**
   * @description
   * The connection options used by TypeORM to connect to the database.
   * See the [TypeORM documentation](https://typeorm.io/#/connection-options) for a
   * full description of all available options.
   */
  databaseConnection: DataSourceOptions;
}

export const defaultConfig: ConfigConfig = {
  databaseConnection: {
    type: 'better-sqlite3',
    database: './config.sqlite',
    synchronize: true,
    entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*.ts'],
  },
};

export const productionConfig: ConfigConfig = {
  databaseConnection: {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'config123',
    database: 'config',
    synchronize: true,
    entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*.ts'],
  },
};

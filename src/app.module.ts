import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { defaultConfig, productionConfig } from './config';


const getConfig = (): DataSourceOptions => {
  let databaseConnection = productionConfig.databaseConnection;

  if (process.env.NODE_ENV != 'production') {
    databaseConnection = defaultConfig.databaseConnection;
  }

  return databaseConnection;
};

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...getConfig(), autoLoadEntities: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

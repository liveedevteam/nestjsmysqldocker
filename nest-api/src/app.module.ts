import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObstacleModule } from './obstacle/obstacle.module';
import { Obstacle } from './obstacle/entities/obstacle.entity';
import { ObstacleType } from './obstacle_type/entities/obstacleType.entity';
import { ObstacleTypeModule } from './obstacle_type/obstacleType.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Making the ConfigModule global
    }), // Importing the ConfigModule to read .env files
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql', // Type of the database
        host: configService.get('DATABASE_HOST'), // Database host
        port: configService.get<number>('DATABASE_PORT'), // Database port
        username: configService.get('DATABASE_USERNAME'), // Username
        password: configService.get('DATABASE_PASSWORD'), // Password
        database: configService.get('DATABASE_NAME'), // Name of the database
        entities: [
          Obstacle,
          ObstacleType
        ], // Entities to be loaded for this connection
        synchronize: true, // Sync entities (not for production)
      }),
    }),
    ObstacleModule, // Importing the ObstacleModule
    ObstacleTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }

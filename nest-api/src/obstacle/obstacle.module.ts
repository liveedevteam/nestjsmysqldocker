import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Obstacle } from './entities/obstacle.entity';
import { ObstacleController } from './obstacle.controller';
import { ObstacleService } from './obstacle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Obstacle])],
  controllers: [ObstacleController],
  providers: [ObstacleService],
})

export class ObstacleModule {}

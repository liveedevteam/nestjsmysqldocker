import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObstacleType } from './entities/obstacleType.entity';
import { ObstacleTypeController } from './obstacleType.controller';
import { ObstacleTypeService } from './obstacleType.service';

@Module({
  imports: [TypeOrmModule.forFeature([ObstacleType])],
  controllers: [ObstacleTypeController],
  providers: [ObstacleTypeService],
})

export class ObstacleTypeModule {}

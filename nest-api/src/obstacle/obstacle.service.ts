import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Obstacle } from './entities/obstacle.entity';
import { ObstacleDto } from './dto/obstacle.dto';

@Injectable()
export class ObstacleService {
    constructor(
        @InjectRepository(Obstacle)
        private obstacleRepository: Repository<Obstacle>,
    ) { }

    async findOne(id: string): Promise<ObstacleDto> {
        const obstacle_id = parseInt(id, 10);
        const obstacle = await this.obstacleRepository.findOne({ where: { obstacle_id } });
        return obstacle;
    }

    async findAll(): Promise<ObstacleDto[]> {
        const obstacles = await this.obstacleRepository.find();
        return obstacles;
    }

    async create(obstacleDto: ObstacleDto): Promise<ObstacleDto> {
        const obstacle = await this.obstacleRepository.create(obstacleDto);
        await this.obstacleRepository.save(obstacle);
        return obstacle;
    }
}

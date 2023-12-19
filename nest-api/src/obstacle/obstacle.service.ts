import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Obstacle } from './entities/obstacle.entity';
import { ObstacleDto } from './dto/obstacle.dto';

@Injectable()
export class ObstacleService {
    findOne(id: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Obstacle)
        private obstacleRepository: Repository<Obstacle>,
    ) { }

    async findAll(): Promise<ObstacleDto[]> {
        const obstacles = await this.obstacleRepository.find();
        return obstacles.map(obstacle => {
            // Convert each Obstacle entity to ObstacleDto
            return {
                ...obstacle,
                // Any other transformations if needed
            };
        });
    }

    async create(obstacleDto: ObstacleDto): Promise<ObstacleDto> {
        const obstacle = await this.obstacleRepository.create(obstacleDto);
        await this.obstacleRepository.save(obstacle);
        return obstacle;
    }
}

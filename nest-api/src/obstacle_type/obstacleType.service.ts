import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObstacleType } from './entities/obstacleType.entity';
import { ObstacleTypeDto } from './dto/obstacleType.dto';

@Injectable()
export class ObstacleTypeService {
    constructor(
        @InjectRepository(ObstacleType)
        private obstacleTypeRepository: Repository<ObstacleType>,
    ) { }
    findAll(): Promise<ObstacleTypeDto[]> {
        return this.obstacleTypeRepository.find();
    }
}

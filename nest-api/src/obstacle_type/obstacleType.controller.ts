import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObstacleTypeService } from './obstacleType.service';
import { ObstacleTypeDto } from './dto/obstacleType.dto';

@Controller('obstacleType')
export class ObstacleTypeController {
    constructor(private readonly obstacleTypeService: ObstacleTypeService) { }

    @Get()
    findAll(): Promise<ObstacleTypeDto[]> {
        return this.obstacleTypeService.findAll();
    }
}
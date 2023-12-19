import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObstacleService } from './obstacle.service';
import { ObstacleDto } from './dto/obstacle.dto';

@Controller('obstacle')
export class ObstacleController {
    constructor(private readonly obstacleService: ObstacleService) { }

    @Get()
    findAll(): Promise<ObstacleDto[]> {
        return this.obstacleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<ObstacleDto> {
        return this.obstacleService.findOne(id);
    }

    @Post()
    create(@Body() obstacleDto: ObstacleDto) {
        return this.obstacleService.create(obstacleDto);
    }

    // Other endpoints...
}

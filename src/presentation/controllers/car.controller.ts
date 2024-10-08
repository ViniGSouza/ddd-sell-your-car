import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreateCarDto } from '../dtos/create-car.dto';
import { Car } from '../../domain/entities/car.entity';
import { CreateCarUseCase } from 'src/application/use-cases/car/create-car';
import { ListUserCarsUseCase } from 'src/application/use-cases/car/list-user-cars';

@Controller('users/:userId/cars')
export class CarController {
  constructor(
    private readonly createCar: CreateCarUseCase,
    private readonly listUserCars: ListUserCarsUseCase,
  ) {}

  @Post()
  async create(
    @Param('userId') userId: string,
    @Body() createCarDto: CreateCarDto,
  ): Promise<Car> {
    return await this.createCar.execute({
      ...createCarDto,
      ownerId: userId,
    });
  }

  @Get()
  async list(@Param('userId') userId: string): Promise<Car[]> {
    return await this.listUserCars.execute(userId);
  }
}

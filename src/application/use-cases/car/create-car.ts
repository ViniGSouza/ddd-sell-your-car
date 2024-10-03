import { Inject, Injectable } from '@nestjs/common';
import { Car } from 'src/domain/entities/car.entity';
import { CarRepository } from 'src/domain/repositories/car.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateCarUseCase {
  constructor(
    @Inject('CarRepository')
    private readonly carRepository: CarRepository,
  ) {}

  async execute(data: {
    category: string;
    brand: string;
    model: string;
    year: number;
    mileage: number;
    description: string;
    ownerId: string;
    price: number;
  }): Promise<Car> {
    const car = new Car(
      uuidv4(),
      data.category,
      data.brand,
      data.model,
      data.year,
      data.mileage,
      data.description,
      data.ownerId,
      data.price,
    );
    return await this.carRepository.create(car);
  }
}

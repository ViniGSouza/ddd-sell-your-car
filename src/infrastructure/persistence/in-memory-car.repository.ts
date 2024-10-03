import { CarRepository } from '../../domain/repositories/car.repository';
import { Car } from '../../domain/entities/car.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryCarRepository implements CarRepository {
  private cars: Car[] = [];

  async create(car: Car): Promise<Car> {
    this.cars.push(car);
    return car;
  }

  async findByOwnerId(ownerId: string): Promise<Car[]> {
    return this.cars.filter((car) => car.ownerId === ownerId);
  }
}

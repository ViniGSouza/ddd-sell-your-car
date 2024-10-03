import { CarRepository } from '../../../domain/repositories/car.repository';
import { Car } from '../../../domain/entities/car.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ListUserCarsUseCase {
  constructor(
    @Inject('CarRepository')
    private readonly carRepository: CarRepository,
  ) {}

  async execute(ownerId: string): Promise<Car[]> {
    return await this.carRepository.findByOwnerId(ownerId);
  }
}

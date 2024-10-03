import { Car } from '../entities/car.entity';

export interface CarRepository {
  create(car: Car): Promise<Car>;
  findByOwnerId(ownerId: string): Promise<Car[]>;
}

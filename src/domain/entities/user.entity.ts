import { Car } from './car.entity';

export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public cpf: string,
    public password: string,
    public cars: Car[] = [],
  ) {}
}

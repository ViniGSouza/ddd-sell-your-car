import { Module } from '@nestjs/common';
import { InMemoryCarRepository } from 'src/infrastructure/persistence/in-memory-car.repository';
import { InMemoryUserRepository } from 'src/infrastructure/persistence/in-memory-user.repository';
import { CarController } from 'src/presentation/controllers/car.controller';
import { UserController } from 'src/presentation/controllers/user.controller';
import { ListUserCarsUseCase } from './application/use-cases/car/list-user-cars';
import { CreateUserUseCase } from './application/use-cases/user/create-user';
import { CreateCarUseCase } from './application/use-cases/car/create-car';

@Module({
  controllers: [UserController, CarController],
  providers: [
    CreateUserUseCase,
    CreateCarUseCase,
    ListUserCarsUseCase,
    { provide: 'UserRepository', useClass: InMemoryUserRepository },
    { provide: 'CarRepository', useClass: InMemoryCarRepository },
  ],
})
export class AppModule {}

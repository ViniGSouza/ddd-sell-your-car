import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(data: {
    name: string;
    email: string;
    cpf: string;
    password: string;
  }): Promise<User> {
    const user = new User(
      uuidv4(),
      data.name,
      data.email,
      data.cpf,
      data.password,
    );
    return await this.userRepository.create(user);
  }
}

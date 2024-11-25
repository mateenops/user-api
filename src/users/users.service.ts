import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
} from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      return await this.userRepository.save(user);
    } catch (err) {
      throw new InternalServerErrorException((err as Error).message);
    }
  }

  async getAllUsers(): Promise<GetUserResponse[]> {
    try {
      return await this.userRepository.find();
    } catch (err) {
      throw new InternalServerErrorException((err as Error).message);
    }
  }
}

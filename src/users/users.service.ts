import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
} from './users.dto';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(RedisService) private readonly redisService: RedisService,
  ) {}

  async createUser(user: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      const userReponse = await this.userRepository.save(user);
      await this.redisService.publish(
        'user_signup',
        JSON.stringify(userReponse),
      );
      return userReponse;
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

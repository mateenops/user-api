import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
} from './users.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserRequest })
  @ApiResponse({
    status: 201,
    description: 'User successfully created.',
    type: CreateUserResponse,
  })
  @ApiResponse({ status: 400, description: 'Validation errors.' })
  async createUser(
    @Body() user: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const userResponse = await this.usersService.createUser(user);
    return userResponse;
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all users.',
    type: [GetUserResponse],
  })
  async getUsers(): Promise<GetUserResponse[]> {
    const usersResponse = await this.usersService.getAllUsers();
    return usersResponse;
  }
}

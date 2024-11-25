import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsInt, Min } from 'class-validator';

export class CreateUserRequest {
  @ApiProperty({ description: 'Name of the user', example: 'Abdul Mateen' })
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({
    description: 'Email of the user',
    example: 'mateen@example.com',
  })
  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @ApiProperty({ description: 'Age of the user', example: 25 })
  @IsNotEmpty({ message: 'Age should not be empty' })
  @IsInt({ message: 'Age must be an integer' })
  @Min(1, { message: 'Age must be at least 1' })
  age: number;
}

export class CreateUserResponse {
  @ApiProperty({ description: 'Unique ID of the user', example: 1 })
  userId: number;

  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  name: string;

  @ApiProperty({
    description: 'Email of the user',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({ description: 'Age of the user', example: 25 })
  age: number;
}

export class GetUserResponse {
  @ApiProperty({ description: 'Unique ID of the user', example: 1 })
  userId: number;

  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  name: string;

  @ApiProperty({
    description: 'Email of the user',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({ description: 'Age of the user', example: 25 })
  age: number;
}

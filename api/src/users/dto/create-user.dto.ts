import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Must be a valid email type' })
  @ApiProperty({
    example: 'examile@.com',
    description: 'Email',
  })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(1, 16, { message: 'Password length must be from 1 to 16 symbols' })
  @ApiProperty({
    example: 'fdsfDfscv123',
    description: 'Password',
  })
  readonly password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'Role must be a string' })
  @ApiProperty({
    example: 'USER',
    description: 'User roles',
  })
  readonly value: string;
}

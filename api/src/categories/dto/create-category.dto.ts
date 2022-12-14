import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString({ message: 'Category must be a string' })
  @ApiProperty({
    example: 'Web development',
    description: 'Category name',
  })
  readonly value: string;
}

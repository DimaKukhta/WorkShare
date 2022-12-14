import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString({ message: 'Category must be a string' })
  @ApiProperty({
    example: 'Web development',
    description: 'Category name',
  })
  readonly value: string;
}

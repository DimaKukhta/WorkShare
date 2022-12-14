import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoriesRepository.create(
      createCategoryDto,
    );
    await this.categoriesRepository.save(newCategory);
    return newCategory;
  }

  findAll() {
    return this.categoriesRepository.find();
  }

  async findOneById(id: string) {
    const category = await this.categoriesRepository.findOneBy({ id });
    if (category) {
      return category;
    }
    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
  }

  async updateCategory(id: string, post: UpdateCategoryDto) {
    await this.categoriesRepository.update(id, post);
    const updatedCategory = await this.categoriesRepository.findOneBy({ id });
    if (updatedCategory) {
      return updatedCategory;
    }

    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
  }

  async removeCategory(id: string) {
    const deletedCategory = await this.categoriesRepository.delete(id);
    if (!deletedCategory.affected) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
  }
}

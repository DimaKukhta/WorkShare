import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  async getAll() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {}

  @Put(':id')
  async update(@Param('id') id: string) {}

  @Delete(':id')
  async remove(@Param('id') id: string) {}
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private roleService: RolesService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    const role = await this.roleService.getRoleByValue('USER');
    user.roles = [role];
    return await this.usersRepository.save(user);
  }

  async getAllUsers() {
    return await this.usersRepository.find({
      relations: {
        roles: true,
      },
    });
  }

  async getUserByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email,
      },
      relations: {
        roles: true,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private rolesRepository: Repository<Role>,
  ) {}

  async createRole(createRoleDto: CreateRoleDto) {
    return await this.rolesRepository.save(createRoleDto);
  }

  async getAllRoles() {
    return await this.rolesRepository.find();
  }

  async getRoleByValue(value: string) {
    const role = await this.rolesRepository.findOneBy({ value });
    if (role) {
      return role;
    }
    return await this.rolesRepository.save({ value: 'USER' });
  }
}

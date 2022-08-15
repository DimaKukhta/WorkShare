import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    example: '23e4567-e89b-12d3-a456-426614174000',
    description: 'Id',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'examile@.com',
    description: 'Email',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    example: 'fdsfDfscv123',
    description: 'Password',
  })
  @Column()
  password: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}

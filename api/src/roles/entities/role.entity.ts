import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @ApiProperty({
    example: '23e4567-e89b-12d3-a456-426614174000',
    description: 'Id',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'USER',
    description: 'User roles',
  })
  @Column({ unique: true })
  value: string;
}

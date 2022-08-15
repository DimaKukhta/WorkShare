import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY || 'SECRET',
      signOptions: {
        expiresIn: '2h',
      },
    }),
    UsersModule,
  ],
})
export class AuthModule {}

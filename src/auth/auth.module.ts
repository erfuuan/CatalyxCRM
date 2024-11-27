import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module'; // Import the UserModule
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),  // If you're directly accessing the User repository here
    UsersModule, // Import UserModule to get access to UserRepository
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}

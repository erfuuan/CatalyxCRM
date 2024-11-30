import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './DTO/create-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>, // Inject کردن repository
  ) { }

  // ایجاد یک کاربر جدید
  async create(userDto: CreateUserDto): Promise<User> {
    const user = this.usersRepo.create(userDto);
    return await this.usersRepo.save(user);
  }

  // دریافت لیست تمامی کاربران
  async findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  //   async findOne(id: number): Promise<User> {
  //     return this.usersRepo.findOne(id);
  //   }

  //   async update(id: number, userDto: { email?: string; password?: string }): Promise<User> {
  //     await this.usersRepo.update(id, userDto);
  //     return this.usersRepo.findOne(id);
  //   }

  //   async remove(id: number): Promise<void> {
  //     await this.usersRepo.delete(id);
  //   }
}

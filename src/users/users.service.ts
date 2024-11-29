import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'; 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>, // Inject کردن repository
  ) {}

  // ایجاد یک کاربر جدید
  async create(userDto: { email: string; password: string }): Promise<User> {
      const user = this.usersRepository.create(userDto);
      const a=await this.usersRepository.save(user);
      console.log(a)
      return a 

  }

  // دریافت لیست تمامی کاربران
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

//   async findOne(id: number): Promise<User> {
//     return this.usersRepository.findOne(id);
//   }

//   async update(id: number, userDto: { email?: string; password?: string }): Promise<User> {
//     await this.usersRepository.update(id, userDto);
//     return this.usersRepository.findOne(id);
//   }

//   async remove(id: number): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
}

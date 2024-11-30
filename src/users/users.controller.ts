import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param('id') id: number) {
  //     return this.usersService.findOne(id);
  //   }

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.create(userDto);
  }

  //   @Put(':id')
  //   update(@Param('id') id: number, @Body() userDto: { email?: string; password?: string }) {
  //     return this.usersService.update(id, userDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: number) {
  //     return this.usersService.remove(id);
  //   }
}

import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  // @IsString()
  // @IsNotEmpty()
  // name: string;

  @IsEmail()
  email: string;

  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  password: string
}

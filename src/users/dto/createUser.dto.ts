import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  firstname: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  lastname: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;
}

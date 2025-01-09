import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  email?: string;

  @IsAlphanumeric()
  firstname?: string;

  @IsAlphanumeric()
  lastname?: string;

  @MinLength(8)
  password?: string;

  @IsAlphanumeric()
  username?: string;
}

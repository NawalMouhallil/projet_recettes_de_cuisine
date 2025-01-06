import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  firstname: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  lastname: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;
}

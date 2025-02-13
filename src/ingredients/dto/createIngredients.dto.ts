import { IsString, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  unite: string;
}

class IngredientQuantiteDto {
  @IsString()
  @IsNotEmpty()
  ingredient: string;

  @IsString()
  @IsNotEmpty()
  quantite: string;
}

export class CreateRecetteDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngredientQuantiteDto)
  ingredients: IngredientQuantiteDto[];
}

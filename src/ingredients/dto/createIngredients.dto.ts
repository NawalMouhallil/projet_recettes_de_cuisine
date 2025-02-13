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

export class CreateRecipeDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngredientQuantiteDto)
  ingredients: IngredientQuantiteDto[];
}

class IngredientQuantiteDto {
  @IsString()
  @IsNotEmpty()
  ingredient: string;

  @IsString()
  @IsNotEmpty()
  quantite: string;
}

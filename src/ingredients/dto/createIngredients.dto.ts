import {
  IsString,
  IsArray,
  ValidateNested,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIngredientDto {
  
  nom: string;
  quantite: number;
}

class IngredientQuantiteDto {
  @IsString()
  @IsNotEmpty()
  ingredient: string;

  @IsNumber()
  @IsNotEmpty()
  quantite: number;
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

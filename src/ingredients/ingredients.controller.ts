import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/createIngredients.dto';
import { Ingredient } from './ingredients.schema';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  async getAllIngredients(): Promise<Ingredient[]> {
    return this.ingredientsService.getIngredients();
  }

  @Get(':id')
  async getIngredient(@Param('id') id: string): Promise<Ingredient> {
    return this.ingredientsService.getIngredientById(id);
  }

  @Post()
  async create(
    @Body() createIngredientDto: CreateIngredientDto,
  ): Promise<Ingredient> {
    return this.ingredientsService.create(createIngredientDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIngredientDto: CreateIngredientDto,
  ): Promise<Ingredient> {
    return this.ingredientsService.update(id, updateIngredientDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Ingredient> {
    return this.ingredientsService.delete(id);
  }
}

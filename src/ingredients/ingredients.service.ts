import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ingredient } from './ingredients.schema';
import { CreateIngredientDto } from './dto/createIngredients.dto';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel('Ingredient')
    private readonly ingredientModel: Model<Ingredient>,
  ) {}

  async getIngredients(): Promise<Ingredient[]> {
    return this.ingredientModel.find().exec();
  }

  async getIngredientById(id: string): Promise<Ingredient> {
    return this.ingredientModel.findById(id).exec();
  }

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const createdIngredient = new this.ingredientModel(createIngredientDto);
    return createdIngredient.save();
  }

  async update(
    id: string,
    updateIngredientDto: Partial<CreateIngredientDto>,
  ): Promise<Ingredient> {
    return this.ingredientModel
      .findByIdAndUpdate(id, updateIngredientDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Ingredient> {
    return this.ingredientModel.findByIdAndDelete(id).exec();
  }
}

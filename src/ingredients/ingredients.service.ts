import { Injectable } from '@nestjs/common';
import { Ingredient } from './ingredients.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel('Ingredient') private ingredientModel: Model<Ingredient>,
  ) {}
}

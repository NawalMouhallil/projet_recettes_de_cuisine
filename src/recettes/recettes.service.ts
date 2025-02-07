import { Injectable } from '@nestjs/common';
import { Recette } from './recettes.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecetteDto } from './dto/createRecettes.dto';

@Injectable()
export class RecettesService {
  constructor(@InjectModel('Recette') private recetteModel: Model<Recette>) {}

  get() {
    return this.recetteModel.aggregate([
      {
        $lookup: {
          from: 'ingredients',
          localField: 'ingredients.ingredient',
          foreignField: '_id',
          as: 'ingredients',
        },
      },
    ]);
  }

  async getRecettes(): Promise<Recette[]> {
    try {
      return await this.recetteModel
        .find()
        .populate('ingredients.ingredient')
        .exec();
    } catch (error) {
      throw new Error(
        `Erreur lors de la récupération des recettes: ${error.message}`,
      );
    }
  }

  create(createRecetteDto: any): Promise<Recette> {
    const createdRecette = new this.recetteModel(createRecetteDto);
    return createdRecette.save();
  }

  async update(
    id: string,
    updateRecetteDto: CreateRecetteDto,
  ): Promise<Recette> {
    return this.recetteModel
      .findByIdAndUpdate(id, updateRecetteDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Recette> {
    return this.recetteModel.findByIdAndDelete(id).exec();
  }
}

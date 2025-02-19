import { Injectable } from '@nestjs/common';
import { Recette } from './recettes.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecetteDto } from './dto/createRecettes.dto';

@Injectable()
export class RecettesService {
  constructor(@InjectModel('Recette') private recetteModel: Model<Recette>) {}

  async getRecetteById(id: string) {
    return await this.recetteModel.findOne({ _id: id }).exec();
  }

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
      if (error instanceof Error) {
        throw new Error(
          `Erreur lors de la récupération des recettes: ${error.message}`,
        );
      } else {
        throw new Error(
          'Erreur inconnue lors de la  récupération des recettes',
        );
      }
    }
  }
  create(createRecetteDto: any): Promise<Recette> {
    const createdRecette = new this.recetteModel(createRecetteDto);
    return createdRecette.save();
  }

  async update(
    id: string,
    updateRecetteDto: Partial<CreateRecetteDto>,
  ): Promise<Recette> {
    return this.recetteModel
      .findByIdAndUpdate(id, updateRecetteDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<null> {
    await this.recetteModel.findByIdAndDelete(id).exec();
    return null;
  }
}

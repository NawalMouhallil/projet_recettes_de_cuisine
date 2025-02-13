import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Recette } from './recettes/recettes.module';
import { CreateRecetteDto } from './recettes/dto/createRecettes.dto';

@Injectable()
export class RecettesService {
  constructor(
    @InjectModel('Recette') private readonly recetteModel: Model<Recette>,
  ) {}

  async create(createRecetteDto: CreateRecetteDto): Promise<Recette> {
    const newRecette = new this.recetteModel(createRecetteDto);
    return newRecette.save();
  }
}

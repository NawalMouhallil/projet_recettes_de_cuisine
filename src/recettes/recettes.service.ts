import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recette } from './recettes.schema';

@Injectable()
export class RecettesService {
  constructor(@InjectModel('Recette') private RecetteModel: Model<Recette>) {}
}

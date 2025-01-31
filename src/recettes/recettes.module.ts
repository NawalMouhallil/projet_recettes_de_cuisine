import { Module } from '@nestjs/common';
import { RecettesController } from './recettes.controller';
import { RecettesService } from './recettes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetteSchema } from './recettes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Recette', schema: RecetteSchema }]),
  ],
  controllers: [RecettesController],
  providers: [RecettesService],
})
export class RecettesModule {}

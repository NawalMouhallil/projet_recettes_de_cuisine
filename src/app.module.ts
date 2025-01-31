import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecettesController } from './recettes/recettes.controller';
import { RecettesService } from './recettes/recettes.service';
import { RecetteSchema } from './recettes/recettes.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/recettes-cuisines'),
    MongooseModule.forFeature([{ name: 'Recette', schema: RecetteSchema }]),
  ],
  controllers: [RecettesController],
  providers: [RecettesService],
})
export class AppModule {}

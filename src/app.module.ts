import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecettesController } from './recettes/recettes.controller';
import { RecettesService } from './recettes/recettes.service';
import { RecetteSchema } from './recettes/recettes.model';
import { IngredientsController } from './ingredients/ingredients.controller';
import { IngredientsService } from './ingredients/ingredients.service';
import { IngredientSchema } from './ingredients/ingredients.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/recettes-cuisines',
      {
        authSource: 'admin',
      },
    ),
    MongooseModule.forFeature([
      { name: 'Recette', schema: RecetteSchema },
      { name: 'Ingredient', schema: IngredientSchema },
    ]),
  ],
  controllers: [RecettesController, IngredientsController],
  providers: [RecettesService, IngredientsService],
})
export class AppModule {}

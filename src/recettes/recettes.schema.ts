import { Schema, Document, model } from 'mongoose';

export const RecetteSchema = new Schema({
  nom: { type: String, required: true }, // Nom de la recette
  description: { type: String, required: true }, // Description de la recette
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true,
      }, // Référence à l'ingrédient
      quantite: { type: Number, required: true }, // Quantité de l'ingrédient
    },
  ],
});

export interface Recette extends Document {
  nom: string; // Nom de la recette
  description: string; // Description de la recette
  ingredients: { ingredient: string; quantite: number }[]; // Liste des ingrédients avec leurs quantités
}

const Recette = model<Recette>('Recette', RecetteSchema);

export const getRecettes = async () => {
  try {
    const recettes = await Recette.find()
      .populate('ingredients.ingredient')
      .exec();
    return recettes;
  } catch (error) {
    throw new Error(
      `Erreur lors de la récupération des recettes: ${(error as Error).message}`,
    );
  }
};

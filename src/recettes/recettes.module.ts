import { Schema, Document, model } from 'mongoose';

export interface Recette extends Document {
  nom: string;
  description: string;
  ingredients: {
    ingredient: Schema.Types.ObjectId;
    quantite: number;
  }[];
}

export const RecetteSchema = new Schema<Recette>(
  {
    nom: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [
      {
        ingredient: {
          type: Schema.Types.ObjectId,
          ref: 'Ingredient',
          required: true,
        },
        quantite: { type: Number, required: true },
      },
    ],
  },
  { _id: true },
);

export const RecetteModel = model<Recette>('Recette', RecetteSchema);

import { Schema, Document } from 'mongoose';

export const IngredientSchema = new Schema({
  nom: { type: String, required: true }, // Nom de l'ingrédient
  unite: { type: String, required: true }, // Unité de mesure (ex: grammes, litres, etc.)
});

export interface Ingredient extends Document {
  nom: string; // Nom de l'ingrédient
  unite: string; // Unité de mesure (ex: grammes, litres, etc.)
}

import { Document, Schema } from 'mongoose';

export const RecetteSchema = new Schema({
  name: { type: String, required: true },
});

export interface Recette extends Document {
  _id: string;
  name: string;
}

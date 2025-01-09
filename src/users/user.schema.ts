import { Document, Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

export interface User extends Document {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  username: string;
}

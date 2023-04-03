/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

export enum Category {
  SPORTS = 'Sports',
  FOOD = 'Food',
  STUDYING = 'Studying',
  SOCIAL = 'Social',
  PERSONAL = 'Personal',
  SELFCARE = 'Self care',
}

@Schema({
  timestamps: true,
})
export class List {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  person: string;

  @Prop()
  duration: string;

  @Prop()
  category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user: User;
}

export const ListSchema = SchemaFactory.createForClass(List);

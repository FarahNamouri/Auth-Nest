/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}

export const ListSchema = SchemaFactory.createForClass(List);

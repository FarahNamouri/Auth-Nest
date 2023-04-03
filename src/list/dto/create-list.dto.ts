/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Category } from '../schemas/list.schema';

export class CreateListDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly person: string;

  @IsNotEmpty()
  @IsString()
  readonly duration: string;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Please enter correct category'})
  readonly category: Category;
}

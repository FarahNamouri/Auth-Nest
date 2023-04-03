/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/list.schema';

export class UpdateListDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly person: string;

  @IsOptional()
  @IsString()
  readonly duration: string;

  @IsOptional()
  @IsEnum(Category, { message: 'Please enter correct category'})
  readonly category: Category;
}

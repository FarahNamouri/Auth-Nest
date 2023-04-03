/* eslint-disable prettier/prettier */
import { IsEmpty, IsEnum, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/list.schema';
import { User } from 'src/auth/schemas/user.schema';

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

  @IsEmpty({  message: "You cannot pass the user id."})
  readonly user: User
}

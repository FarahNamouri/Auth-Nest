/* eslint-disable prettier/prettier */
import { Category } from '../schemas/list.schema';

export class UpdateListDto {
  readonly name: string;
  readonly description: string;
  readonly person: string;
  readonly duration: string;
  readonly category: Category;
}

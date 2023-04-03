import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './schemas/list.schema';
import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class ListService {
  constructor(
    @InjectModel(List.name)
    private listModel: mongoose.Model<List>,
  ) {}

  async findAll(query: Query): Promise<List[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    const keyword = query.keyword
      ? {
          name: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const lists = await this.listModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return lists;
  }

  async create(list: List, user: User): Promise<List> {
    const data = Object.assign(list, { user: user._id });
    const res = await this.listModel.create(data);
    return res;
  }

  async findById(id: string): Promise<List> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter correct id');
    }
    const list = await this.listModel.findById(id);
    return list;
  }

  async updateById(id: string, list: List): Promise<List> {
    return await this.listModel.findByIdAndUpdate(id, list, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<List> {
    return await this.listModel.findByIdAndDelete(id);
  }
}

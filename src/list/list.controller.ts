import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ListService } from './list.service';
import { List } from './schemas/list.schema';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('lists')
export class ListController {
  constructor(private listService: ListService) {}

  @Get()
  async getAllLists(@Query() query: ExpressQuery): Promise<List[]> {
    return this.listService.findAll(query);
  }

  @Post('/new')
  async createList(@Body() list: CreateListDto): Promise<List> {
    return this.listService.create(list);
  }

  @Get(':id')
  async getList(
    @Param('id')
    id: string,
  ): Promise<List> {
    return this.listService.findById(id);
  }

  @Put(':id')
  async updateList(
    @Param('id')
    id: string,
    @Body()
    list: UpdateListDto,
  ): Promise<List> {
    return this.listService.updateById(id, list);
  }

  @Delete(':id')
  async deleteList(
    @Param('id')
    id: string,
  ): Promise<List> {
    return this.listService.deleteById(id);
  }
}

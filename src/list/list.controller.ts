import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ListService } from './list.service';
import { List } from './schemas/list.schema';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('lists')
export class ListController {
  constructor(private listService: ListService) {}

  @Get()
  async getAllLists(@Query() query: ExpressQuery): Promise<List[]> {
    return this.listService.findAll(query);
  }

  @Post('/new')
  // to protect this route :
  @UseGuards(AuthGuard())
  async createList(@Body() list: CreateListDto, @Req() req): Promise<List> {
    return this.listService.create(list, req.user);
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

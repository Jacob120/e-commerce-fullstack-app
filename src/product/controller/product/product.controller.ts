import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Request,
  Body,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { ProductsService } from 'src/product/service/product/product.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('api/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async GetAll(): Promise<ProductEntity[]> {
    return await this.productsService.getAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async Create(
    @Request() req,
    @Body() product: ProductEntity,
  ): Promise<ProductEntity> {
    return await this.productsService.create(product);
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  async GetOne(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ProductEntity> {
    return await this.productsService.getOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async Update(
    @Param() id: string,
    @Body() product: ProductEntity,
    @Request() req,
  ): Promise<UpdateResult> {
    return await this.productsService.update(id, product, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: string, @Request() req): Promise<DeleteResult> {
    return await this.productsService.delete(id, req.user);
  }
}

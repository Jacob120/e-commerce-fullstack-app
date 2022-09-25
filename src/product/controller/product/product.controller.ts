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
} from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { ProductsService } from 'src/product/service/product/product.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('api/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(LocalAuthGuard)
  @Get()
  async GetAll(): Promise<ProductEntity[]> {
    return await this.productsService.getAll();
  }

  @UseGuards(LocalAuthGuard)
  @Post()
  async Create(
    @Request() req,
    @Body() product: ProductEntity,
  ): Promise<ProductEntity> {
    return await this.productsService.create(product, req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Get(':id')
  async GetOne(@Param() id: number): Promise<ProductEntity> {
    return await this.productsService.getOne(id);
  }

  @UseGuards(LocalAuthGuard)
  @Put(':id')
  async Update(
    @Param() id: number,
    @Body() product: ProductEntity,
    @Request() req,
  ): Promise<UpdateResult> {
    return await this.productsService.update(id, product, req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: number, @Request() req): Promise<DeleteResult> {
    return await this.productsService.delete(id, req.user);
  }
}

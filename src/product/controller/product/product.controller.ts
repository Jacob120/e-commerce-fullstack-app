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
import { CreateProductDTO } from 'src/product/dto/create-product.dto';
import { ExternalProductDTO } from 'src/product/dto/external-product.dto';
import { dateToArray } from 'src/shared/data.helper';

@Controller('api/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async GetAll(): Promise<ProductEntity[]> {
    return await this.productsService.getAll();
  }

  @Get(':id')
  async GetOne(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ProductEntity> {
    return await this.productsService.getOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async Create(@Body() item: CreateProductDTO): Promise<ExternalProductDTO> {
    const product = await this.productsService.create(item);
    return this.mapProductToExternal(product);
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

  mapProductToExternal(product: ProductEntity): ExternalProductDTO {
    return {
      ...product,
      createdAt: dateToArray(product.createdAt),
      updatedAt: dateToArray(product.updatedAt),
    };
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { Users } from 'src/auth/user.entity';
import { CreateProductDTO } from 'src/product/dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async create(item: CreateProductDTO): Promise<ProductEntity> {
    return await this.productRepository.save(item);
  }

  async getOne(id: string): Promise<ProductEntity> {
    return await this.productRepository.findOneBy({ id });
  }

  async update(
    id: string,
    product: ProductEntity,
    user: Users,
  ): Promise<UpdateResult> {
    if (user.role == 'admin') {
      return await this.productRepository.update(id, product);
    }
    throw new UnauthorizedException();
  }

  async delete(id: string, user: Users): Promise<DeleteResult> {
    if (user.role == 'admin') {
      return await this.productRepository.delete(id);
    }
    throw new UnauthorizedException();
  }
}

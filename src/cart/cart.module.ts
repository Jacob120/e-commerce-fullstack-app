import { Module } from '@nestjs/common';
import { CartEntity } from './cart.entity';
import { ProductEntity } from 'src/product/product.entity';
import { CartService } from './service/cart/cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from 'src/product/service/product/product.service';
import { CartController } from './controller/cart/cart.controller';
import { Users } from 'src/auth/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
  providers: [CartService, ProductsService],
  controllers: [CartController],
})
export class CartModule {}

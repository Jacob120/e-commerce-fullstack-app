import { OrderEntity } from './order.entity';
import { ProductEntity } from 'src/product/product.entity';
import { CartEntity } from 'src/cart/cart.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from 'src/cart/service/cart/cart.service';
import { ProductsService } from 'src/product/service/product/product.service';
import { OrderService } from './service/order/order.service';
import { OrderController } from './controller/order/order.controller';
import { Users } from 'src/auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, Users]),
  ],
  controllers: [OrderController],
  providers: [OrderService, CartService, ProductsService],
})
export class OrderModule {}

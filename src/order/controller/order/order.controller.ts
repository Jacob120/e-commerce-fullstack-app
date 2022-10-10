import {
  Controller,
  Post,
  Get,
  Request,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderEntity } from 'src/order/order.entity';
import { OrderService } from 'src/order/service/order/order.service';

@Controller('api/order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async addOrder(@Body() body): Promise<any> {
    const {
      firstName,
      lastName,
      address,
      city,
      country,
      zipCode,
      orderNotes,
      username,
      shippingCost,
    } = body;

    return this.orderService.addOrder(
      firstName,
      lastName,
      address,
      city,
      country,
      zipCode,
      orderNotes,
      username,
      shippingCost,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getOrders(@Request() req): Promise<OrderEntity[]> {
    return await this.orderService.getOrders(req.user.username);
  }
}

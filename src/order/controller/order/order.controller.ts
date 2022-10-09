import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderEntity } from 'src/order/order.entity';
import { OrderService } from 'src/order/service/order/order.service';

@Controller('api/order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addOrder(@Request() req): Promise<any> {
    return this.orderService.addOrder(req.user.username);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getOrders(@Request() req): Promise<OrderEntity[]> {
    return await this.orderService.getOrders(req.user.username); //req.user.username
  }
}

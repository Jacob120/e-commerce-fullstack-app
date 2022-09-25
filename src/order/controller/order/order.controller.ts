import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { OrderEntity } from 'src/order/order.entity';
import { OrderService } from 'src/order/service/order/order.service';

@Controller('api/order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async order(@Request() req): Promise<any> {
    return this.orderService.order(req.user.username);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  async getOrders(@Request() req): Promise<OrderEntity[]> {
    return await this.orderService.getOrders(req.user.username);
  }
}

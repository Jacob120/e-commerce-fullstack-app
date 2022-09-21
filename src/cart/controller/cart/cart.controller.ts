import {
  Controller,
  Post,
  Get,
  Request,
  Delete,
  Body,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/jwt-auth.guard';
import { CartEntity } from 'src/cart/cart.entity';
import { CartService } from 'src/cart/service/cart/cart.service';

@Controller('api/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async AddToCart(@Body() body, @Request() req): Promise<void> {
    const { productId, quantity } = body;
    return await this.cartService.addToCart(
      productId,
      quantity,
      req.user.username,
    );
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  async getItemsInCart(@Request() req): Promise<CartEntity[]> {
    return await this.cartService.getItemsInCard(req.user.username);
  }
}

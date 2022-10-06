import {
  Controller,
  Post,
  Get,
  Request,
  Delete,
  Body,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { CartEntity } from 'src/cart/cart.entity';
import { CartService } from 'src/cart/service/cart/cart.service';

@Controller('api/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  // @UseGuards(LocalAuthGuard)
  @Post()
  async AddToCart(@Body() body, @Request() req): Promise<void> {
    const { productId, quantity, username, size } = body;
    return await this.cartService.addToCart(
      productId,
      quantity,
      username,
      size,
    );
  }

  // @UseGuards(LocalAuthGuard)
  @Get()
  async getItemsInCart(@Request() body, @Request() req): Promise<CartEntity[]> {
    const { username } = body;
    return await this.cartService.getItemsInCart('JohnDoe');
  }
}

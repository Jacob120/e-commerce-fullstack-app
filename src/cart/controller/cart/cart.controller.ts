import {
  Controller,
  Post,
  Get,
  Request,
  Delete,
  Body,
  UseGuards,
  Param,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CartEntity } from 'src/cart/cart.entity';
import { CartService } from 'src/cart/service/cart/cart.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('api/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async AddToCart(@Body() body): Promise<void> {
    const { id, quantity, username, size } = body;

    return await this.cartService.addToCart(id, quantity, username, size);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getItemsInCart(@Request() req): Promise<CartEntity[]> {
    return await this.cartService.getItemsInCart(req.user.username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async Update(
    @Param() id: string,
    @Body() cart: CartEntity,
  ): Promise<UpdateResult> {
    return await this.cartService.update(id, cart);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async Delete(@Param() id: string): Promise<DeleteResult> {
    return await this.cartService.delete(id);
  }
}

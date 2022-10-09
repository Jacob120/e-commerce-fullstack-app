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
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { CartEntity } from 'src/cart/cart.entity';
import { CartService } from 'src/cart/service/cart/cart.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('api/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getItemsInCart(@Request() body, @Request() req): Promise<CartEntity[]> {
    console.log(body.username);
    console.log(req.user);
    // const { username } = body;
    return await this.cartService.getItemsInCart(req.user.username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async Update(
    @Param() id: string,
    @Body() cart: CartEntity,
    @Request() req,
  ): Promise<UpdateResult> {
    return await this.cartService.update(id, cart);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: string, @Request() req): Promise<DeleteResult> {
    return await this.cartService.delete(id);
  }
}

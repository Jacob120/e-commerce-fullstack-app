import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/cart.entity';
import { ProductsService } from 'src/product/service/product/product.service';
import { Users } from 'src/auth/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private cartRepository: Repository<CartEntity>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private productsService: ProductsService,
  ) {}

  async addToCart(
    productId: string,
    quantity: number,
    user: string,
    size: string,
  ): Promise<any> {
    const cartItems = await this.cartRepository.find({
      relations: ['item', 'user'],
    });
    const product = await this.productsService.getOne(productId);

    const authUser = await this.userRepository.findOneBy({ username: user });

    //Confirm the product exists.
    if (product) {
      //confirm if user has item in cart
      const cart = cartItems.filter(
        (item) => item.item.id === productId && item.user.username === user,
      );
      if (cart.length < 1 || size !== cart[0].size) {
        const newItem = this.cartRepository.create({
          total: product.price * quantity,
          quantity,
        });
        newItem.user = authUser;
        newItem.item = product;
        newItem.size = size;
        return await this.cartRepository.save(newItem);
      } else {
        //Update the item quantity
        const quantity = (cart[0].quantity += 1);
        const total = cart[0].total * quantity;

        return await this.cartRepository.update(cart[0].id, {
          quantity,
          total,
        });
      }
    }
    return null;
  }

  async getItemsInCart(username: string): Promise<CartEntity[]> {
    const userCart = await this.cartRepository.find({
      relations: ['item', 'user'],
    });
    return await userCart.filter((item) => item.user.username === username);
  }

  async update(id: string, cart: CartEntity): Promise<UpdateResult> {
    return await this.cartRepository.update(id, cart);
  }

  async delete(productId: string): Promise<DeleteResult> {
    return await this.cartRepository.delete(productId);
  }
}

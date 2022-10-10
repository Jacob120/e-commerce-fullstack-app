import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CartService } from 'src/cart/service/cart/cart.service';
import { OrderEntity } from 'src/order/order.entity';
import { Users } from 'src/auth/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private cartService: CartService,
  ) {}

  async addOrder(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    country: string,
    zipCode: string,
    orderNotes: string,
    user: string,
    shippingCost: number,
  ): Promise<any> {
    //find user existing orders
    const usersOrder = await this.orderRepository.find({ relations: ['user'] });
    const userOrder = usersOrder.filter(
      (order) => order.user?.username === user && order.pending === false,
    );

    //find user's cart items
    const cartItems = await this.cartService.getItemsInCart(user);

    //count total price
    const getTotal = () => {
      let totalQuantity = 0;
      let totalPrice = 0;
      cartItems.forEach((cart) => {
        totalQuantity += cart.item.quantity;
        totalPrice += cart.item.price * cart.quantity;
      });
      return { totalPrice, totalQuantity };
    };
    const subTotal = getTotal().totalPrice;

    //get the authenticated user
    const authUser = await this.userRepository.findOneBy({ username: user });

    //if users has an pending order - add item to the list of order
    const cart = await cartItems.map((item) => item.item);

    if (userOrder.length === 0) {
      const newOrder = await this.orderRepository.create({ subTotal });
      newOrder.user = authUser;
      newOrder.firstName = firstName;
      newOrder.lastName = lastName;
      newOrder.address = address;
      newOrder.city = city;
      newOrder.country = country;
      newOrder.zipCode = zipCode;
      newOrder.items = cart;
      newOrder.shippingCost = shippingCost;
      newOrder.pending = true;
      if (orderNotes) newOrder.orderNotes = orderNotes;

      return await this.orderRepository.save(newOrder);
    } else {
      const existingOrder = userOrder.map((item) => item);
      await this.orderRepository.update(existingOrder[0].id, {
        subTotal: existingOrder[0].subTotal + cart[0].price,
      });
      return { message: 'order modified' };
    }
  }

  async getOrders(user: string): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.find({ relations: ['user'] });
    return orders.filter((order) => order.user?.username === user);
  }
}

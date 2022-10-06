import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { Users } from 'src/auth/user.entity';

@Entity()
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  total: number;

  @Column()
  quantity: number;

  @Column()
  size: string;

  @ManyToOne((type) => ProductEntity, (order) => order.id)
  @JoinColumn()
  item: ProductEntity;

  @ManyToOne((type) => Users, (user) => user.username)
  @JoinColumn()
  user: Users;
}

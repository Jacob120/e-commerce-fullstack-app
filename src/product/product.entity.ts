import {
  Entity,
  JoinColumn,
  OneToMany,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartEntity } from 'src/cart/cart.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  type: string;

  @Column()
  category: string;

  @Column()
  price: number;

  @Column()
  onSale: boolean;

  @Column()
  oldPrice: string;

  @Column()
  outOfStock: boolean;

  @Column()
  image: string;

  @Column({ type: 'simple-array' })
  gallery: string[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany((type) => CartEntity, (cart) => cart.id)
  @JoinColumn()
  cart: CartEntity[];
}

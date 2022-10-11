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
  oldPrice: number;

  @Column()
  outOfStock: boolean;

  @Column()
  topSale: boolean;

  @Column()
  image: string;

  @Column({ type: 'simple-array' })
  gallery: string[];

  @Column({ type: 'simple-array' })
  size: string[];

  @Column()
  starsRating: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany((type) => CartEntity, (cart) => cart.id)
  @JoinColumn()
  cart: CartEntity[];
}

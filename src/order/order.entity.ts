import {
  Entity,
  OneToMany,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { Users } from 'src/auth/user.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 500 })
  address: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  country: string;

  @Column({ length: 20 })
  zipCode: string;

  @Column({ default: 0 })
  shippingCost: number;

  @Column({ nullable: true })
  orderNotes?: string;

  @OneToMany((type) => ProductEntity, (item) => item.id)
  items: ProductEntity[];

  @ManyToOne((type) => Users, (user) => user.username)
  user: Users;

  @Column()
  subTotal: number;

  @Column({ default: false })
  pending: boolean;

  @CreateDateColumn()
  createdDate: Date;
}

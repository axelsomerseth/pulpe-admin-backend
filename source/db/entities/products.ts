import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Relation,
} from "typeorm";
import { Category } from "./categories";
import { Transaction } from "./transactions";

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @PrimaryGeneratedColumn("uuid")
  uuid?: string;

  @Column({ length: 150 })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn()
  category?: Relation<Category>;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @Column({ nullable: true })
  deletedAt?: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.product)
  transactions?: Relation<Transaction[]>;

  constructor(
    name: string,
    description: string,
    categoryId: number,
    price: number,
    stock: number
  ) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.price = price;
    this.stock = stock;
  }
}

export { Product };

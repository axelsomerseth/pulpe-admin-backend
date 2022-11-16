import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Transaction {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  productId: number;

  @Column()
  movement: number;

  @Column()
  quantity: number;

  @Column({ length: 25 })
  type: string;

  @Column({ type: "text" })
  description: string;

  @Column()
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @Column({ nullable: true })
  deletedAt?: Date;

  constructor(
    productId: number,
    movement: number,
    quantity: number,
    type: string,
    description: string
  ) {
    this.productId = productId;
    this.movement = movement;
    this.quantity = quantity;
    this.type = type;
    this.description = description;
  }
}

export { Transaction };

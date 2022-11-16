import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Transaction {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  productId?: number;

  @Column()
  movement?: number;

  @Column()
  quantity?: number;

  @Column({ length: 25 })
  type?: string;

  @Column({ type: "text" })
  description?: string;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;

  @Column()
  deletedAt?: Date;
}

export { Transaction };

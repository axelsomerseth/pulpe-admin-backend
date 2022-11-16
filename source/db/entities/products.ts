import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  price?: number;

  @Column()
  stock?: number;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;

  @Column()
  deletedAt?: Date;

  constructor(name: string, description: string, categoryId: number) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
  }
}

export { Product };

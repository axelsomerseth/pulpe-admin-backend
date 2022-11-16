import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 150 })
  name?: string;

  @Column({ type: "text" })
  description?: string;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;

  @Column()
  deletedAt?: Date;
}

export { Category };

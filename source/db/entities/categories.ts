import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 150 })
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @Column({ nullable: true })
  deletedAt?: Date;

  constructor(name: string, description?: string, id?: number) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.createdAt = new Date();
  }
}

export { Category };

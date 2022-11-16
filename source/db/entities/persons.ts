import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Person {
  @PrimaryGeneratedColumn()
  id?: number;

  @PrimaryGeneratedColumn("uuid")
  uuid?: string;

  @Column({ length: 20, nullable: true })
  firstName?: string;

  @Column({ length: 20, nullable: true })
  middleName?: string;

  @Column({ length: 20, nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  age?: number;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50, nullable: true })
  phone?: string;

  @Column({ length: 50 })
  password: string;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @Column({ nullable: true })
  deletedAt?: Date;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
  }
}

export { Person };

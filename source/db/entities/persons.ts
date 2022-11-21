// ! Persons and not user because we are people centered.

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Person {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "uuid" })
  uuid?: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 20, nullable: true })
  firstName?: string;

  @Column({ length: 20, nullable: true })
  middleName?: string;

  @Column({ length: 20, nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  age?: number;

  @Column({ length: 50 })
  email?: string;

  @Column({ length: 50, nullable: true })
  phone?: string;

  @Column()
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @Column({ nullable: true })
  deletedAt?: Date;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export { Person };

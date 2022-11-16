import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Person {
  @PrimaryGeneratedColumn()
  id?: number;

  @PrimaryGeneratedColumn("uuid")
  uuid?: string;

  @Column({ length: 20 })
  firstName?: string;

  @Column({ length: 20 })
  middleName?: string;

  @Column({ length: 20 })
  lastName?: string;

  @Column()
  age?: number;

  @Column({ length: 50 })
  email?: string;

  @Column({ length: 50 })
  phone?: string;
}

export { Person };

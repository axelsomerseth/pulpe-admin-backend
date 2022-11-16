import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "./entities/categories";
import { Product } from "./entities/products";
import { Transaction } from "./entities/transactions";
import { Person } from "./entities/persons";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Category, Product, Transaction, Person],
  synchronize: true,
  logging: process.env.MODE === "development",
});

const connectDB = () => {
  // AppDataSource.initialize(): to initialize initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  AppDataSource.initialize()
    .then((connection: DataSource) => {
      // here you can start to work with your database
      if (connection.isInitialized) {
        console.log(
          `Database "${connection.driver.schema}.${connection.driver.database}" connected successfully`
        );
      }
    })
    .catch((error) => console.error(error));
};

export { connectDB, AppDataSource };

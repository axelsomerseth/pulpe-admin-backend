// Loading environment variables here to use it with TypeORM CLI.
import * as dotenv from "dotenv";
dotenv.config();

import { DataSource, DataSourceOptions } from "typeorm";

// Entities
import { Category } from "./entities/categories";
import { Product } from "./entities/products";
import { Transaction } from "./entities/transactions";
import { Person } from "./entities/persons";

// Migrations
import { UuidMigration1668736771045 } from "./migrations/1668736771045-UuidMigration";
import { CategoryMigration1668740371045 } from "./migrations/1668740371045-CategoryMigration";
import { ProductMigration1668740557066 } from "./migrations/1668740557066-ProductMigration";
import { TransactionMigration1668740700298 } from "./migrations/1668740700298-TransactionMigration";
import { PersonMigration1668740901099 } from "./migrations/1668740901099-PersonMigration";

const options: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Category, Product, Transaction, Person],
  migrations: [
    UuidMigration1668736771045,
    CategoryMigration1668740371045,
    ProductMigration1668740557066,
    TransactionMigration1668740700298,
    PersonMigration1668740901099,
  ],
  migrationsTableName: "migration",
  synchronize: false, // it's unsafe to use synchronize === true in production
  logging: process.env.MODE === "development",
  applicationName: "pulpe_admin",
};
const AppDataSource = new DataSource(options);

const connectDB = async () => {
  try {
    // AppDataSource.initialize(): to initialize initial connection with the database, register all entities
    // and "synchronize" database schema, call "initialize()" method of a newly created database
    // once in your application bootstrap
    const connection: DataSource = await AppDataSource.initialize();
    if (connection.isInitialized) {
      console.log(
        `Database "${connection.driver.database}" connected successfully.`
      );
    }
  } catch (error: unknown) {
    console.error("Unable to connect to database: ", error);
  } finally {
    console.log("______________________");
  }
};

export { connectDB, AppDataSource };

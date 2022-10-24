import { Product } from "../types/products";
import {
  findProducts,
  searchForProducts,
  findProductById,
  addProduct,
  editProduct,
  removeProduct,
} from "./products";

import { getRandomId } from "../utils/repository";

describe("products repository", () => {
  it("should return a list of products through findProducts function", async () => {
    // arrange

    // act
    const outcome = await findProducts();

    // assert
    expect(outcome).toBeDefined();
    expect(outcome).toBeInstanceOf(Array);
  });

  it.todo(
    "should return searched products in an array through searchForProducts function"
  );

  it.todo("should return one product through findProductById function");

  it.failing(
    "should return a product object through addProduct function",
    async () => {
      // arrange
      const newProduct: Product = {
        name: "Test name",
        description: "Test description",
        categoryId: getRandomId(),
        price: 100,
        stock: 12,
      };

      // act
      const outcome = await addProduct(newProduct);

      // assert
      expect(outcome).toBeDefined();
    }
  );

  it.todo("should return an category object through editCategory function");

  it("should return an object with a deletedRows property when deleting", async () => {
    // arrange
    const idToRemove = getRandomId();

    // act
    const outcome = await removeProduct(idToRemove);

    // assert
    expect(outcome).toBeDefined();
    expect(outcome.deletedRows).toBeDefined();
  });
});

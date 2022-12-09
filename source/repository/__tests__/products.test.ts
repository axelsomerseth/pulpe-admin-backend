import { Product } from "../../db/entities/products";
import { getRandomId, getRandomNumber } from "../../utils/repository";
import { addProduct } from "../products";

describe("products repository", () => {
  it("should add a new category", async () => {
    // arrange
    const newProduct = new Product(
      "Mock name",
      "Mock description",
      getRandomId(),
      getRandomNumber(),
      getRandomNumber()
    );

    // act
    const result = await addProduct(newProduct);

    // assert
    expect(result).toBeDefined();
  });
});

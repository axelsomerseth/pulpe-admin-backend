import { Product } from "../../db/entities/products";
import { getRandomId, getRandomNumber } from "../../utils/repository";
import { addProduct, findProducts, findProductsByName } from "../products";

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

  it("should list products", async () => {
    // arrange

    // act
    const result = await findProducts();

    // assert
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it("should list products by name (search)", async () => {
    // arrange
    const search = "coffee";

    // act
    const result = await findProductsByName(search);

    // assert
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it.todo("should add a product");

  it.todo("should find a product by id");

  it.todo("should edit a product");

  it.todo("should remove a product");
});

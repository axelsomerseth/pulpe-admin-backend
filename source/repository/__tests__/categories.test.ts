import { Category } from "../../db/entities/categories";
import { addCategory, findCategories } from "../categories";

jest.mock("typeorm");

describe("categories repository", () => {
  it("should add a new category", async () => {
    // arrange
    const newCategory = new Category("test name", "test description");

    // act
    const result = await addCategory(newCategory);

    // assert
    expect(result).toBeDefined();
  });

  it("should list categories", async () => {
    // arrange
    // act
    const result = await findCategories();

    // assert
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });
});

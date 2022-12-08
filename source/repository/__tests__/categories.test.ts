import { Category } from "../../db/entities/categories";
import { getRandomId } from "../../utils/repository";
import {
  addCategory,
  editCategory,
  findCategories,
  findCategoryById,
} from "../categories";

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

  it("should find a category", async () => {
    // arrange
    const randomId = getRandomId();

    // act
    const result = await findCategoryById(randomId);

    // assert
    expect(result).toBeDefined();
    expect(result?.name).toBeDefined();
  });

  it("should edit a category", async () => {
    // arrange
    const editedCategory = new Category(
      "Edited Category",
      "Edited description"
    );
    editedCategory.id = getRandomId();

    // act
    const result = await editCategory(editedCategory);

    // assert
    expect(result).toBeDefined();
    expect(result?.name).toBe(editedCategory.name);
  });
});

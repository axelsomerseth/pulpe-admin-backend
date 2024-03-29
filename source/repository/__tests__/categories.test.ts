import { Category } from "../../db/entities/categories";
import { AppDataSource } from "../../db/connection";
import { getRandomId } from "../../utils/repository";
import {
  addCategory,
  editCategory,
  findCategories,
  findCategoryById,
  removeCategory,
  categoryRepository,
} from "../categories";

jest.mock("typeorm");
jest.mock("../../db/connection");

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
    // @ts-ignore
    categoryRepository.find = jest.fn(() =>
      Promise.reject({ error: "mock error" })
    );

    // act
    const result = await findCategories();

    // assert
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it("should find a category", async () => {
    // arrange
    const randomId = getRandomId();
    // @ts-ignore
    categoryRepository.find = jest.fn(() =>
      Promise.reject({ error: "mock error" })
    );
    // @ts-ignore
    // console.log(repo);

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

  it("should remove a category", async () => {
    // arrange
    const existingCategory = new Category(
      "Existing category",
      "Some description"
    );
    existingCategory.id = getRandomId();

    // act
    const result = await removeCategory(existingCategory.id);

    // assert
    expect(result).toBeDefined();
    expect(result.isDeleted).toBe(true);
  });
});

import { Category } from "../types/categories";
import {
  findCategories,
  findCategoryById,
  addCategory,
  editCategory,
  removeCategory,
} from "./categories";

import { getRandomId } from "../utils/repository";

describe("categories repository", () => {
  it("should return a list of categories through findCategories function", async () => {
    // arrange

    // act
    const outcome = await findCategories();

    // assert
    expect(outcome).toBeDefined();
  });

  it("should return one category through findCategoryById function", async () => {
    // arrange
    const categoryId = getRandomId();

    // act
    const outcome = await findCategoryById(categoryId);

    // assert
    expect(outcome).toBeDefined();
  });

  it("should return an category object through addCategory function", async () => {
    // arrange
    const newCategory: Category = {
      name: "Test name",
      description: "Test description",
    };

    // act
    const outcome = await addCategory(newCategory);

    // assert
    expect(outcome).toBeDefined();
    expect(outcome.name).toBe(newCategory.name);
  });

  it("should return an category object through editCategory function", async () => {
    // arrange
    const editedCategory: Category = {
      id: getRandomId(),
      name: "Test name",
      description: "Test description",
    };

    // act
    const outcome = await editCategory(editedCategory);

    // assert
    expect(outcome).toBeDefined();
    expect(outcome.id).toBe(editedCategory.id);
  });

  it("should return an object with a deletedRows property when deleting", async () => {
    // arrange
    const idToRemove = getRandomId();

    // act
    const outcome = await removeCategory(idToRemove);

    // assert
    expect(outcome.deletedRows).toBeDefined();
  });
});

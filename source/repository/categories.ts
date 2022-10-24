import { Category } from "../types/categories";

// TODO: import db connection
const TABLE_NAME = "categories";

const findCategories = async (): Promise<Category[]> => {
  let results: Category[] = [];
  // TODO: implement database.
  return results;
};

const findCategoryById = async (categoryId: number): Promise<Category> => {
  let result: Category = { name: "" };
  // TODO: implement database.
  // TODO: implement notFound case.
  return result;
};

const addCategory = async (category: Category): Promise<Category> => {
  let result: Category = { ...category };
  // TODO: implement database.
  return result;
};

const editCategory = async (category: Category): Promise<Category> => {
  let result: Category = { ...category };
  const found = findCategoryById(category.id as number);
  // TODO: implement database.
  // TODO: implement notFound case.
  return result;
};

const removeCategory = async (
  categoryId: number
): Promise<{ deletedRows: number }> => {
  // TODO: implement notFound case.
  // TODO: return deleted rows.
  return { deletedRows: 0 };
};

export {
  findCategories,
  findCategoryById,
  addCategory,
  editCategory,
  removeCategory,
};

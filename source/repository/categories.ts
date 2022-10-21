import { Category } from "../types/categories";

// TODO: import db connection
const TABLE_NAME = "categories";

const findCategories = async () => {
  // TODO: return a list of categories.
};

const findCategoryById = async (categoryId: number) => {
  // TODO: return one category by the given id.
};

const addCategory = async (category: Category) => {
  // TODO: return the added category with his ID.
};

const editCategory = async (category: Category) => {
  // TODO: return the edited category.
};

const removeCategory = async (categoryId: number) => {
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

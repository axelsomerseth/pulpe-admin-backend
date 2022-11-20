import { Category } from "../db/entities/categories";
import { AppDataSource } from "../db/connection";

const categoryRepository = AppDataSource.getRepository(Category);

const findCategories = async (): Promise<Category[]> => {
  let results = await categoryRepository.find();
  return results;
};

const addCategory = async (category: Category): Promise<Category> => {
  let newCategory = new Category(category.name, category.description);
  newCategory.createdAt = new Date();

  try {
    await categoryRepository.save(newCategory);
  } catch (err: unknown) {
    console.error(err);
  }

  return newCategory;
};

const findCategoryById = async (
  categoryId: number
): Promise<Category | null> => {
  let result = await categoryRepository.findOneBy({ id: categoryId });
  return result;
};

const editCategory = async (category: Category): Promise<Category | null> => {
  const categoryToUpdate = await categoryRepository.findOneBy({
    id: category.id,
  });

  if (categoryToUpdate === null) return null;

  categoryToUpdate.name = category.name;
  categoryToUpdate.description = category.description;
  categoryToUpdate.updatedAt = new Date();

  try {
    await categoryRepository.save(categoryToUpdate);
  } catch (err: unknown) {
    console.error(err);
  }

  return categoryToUpdate;
};

const removeCategory = async (
  categoryId: number
): Promise<{ isDeleted: boolean }> => {
  const categoryToRemove = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (categoryToRemove === null) return { isDeleted: false };

  try {
    await categoryRepository.remove(categoryToRemove);
  } catch (err: unknown) {
    console.error(err);
  }

  return { isDeleted: true };
};

export {
  findCategories,
  findCategoryById,
  addCategory,
  editCategory,
  removeCategory,
};

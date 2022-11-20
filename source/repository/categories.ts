import { Category } from "../db/entities/categories";
import { AppDataSource } from "../db/connection";

const categoryRepository = AppDataSource.getRepository(Category);

const findCategories = async (): Promise<Category[]> => {
  let results = await categoryRepository.find();
  return results;
};

// * Transaction
const addCategories = async (
  categories: Category[]
): Promise<{ imported: boolean }> => {
  // * Transaction to import multiple categories.
  // ? Docs: https://typeorm.io/transactions

  let result = { imported: false };

  // create a new query runner
  const queryRunner = AppDataSource.createQueryRunner();

  // establishing real database connection using our new query runner
  await queryRunner.connect();

  // opening a new transaction
  await queryRunner.startTransaction();

  try {
    // execute some operations on this transaction:
    for (let index: number = 0; index < categories.length; index++) {
      const category = categories[index];
      // ! Comment the following line to produce an error in the transaction.
      category.createdAt = new Date();
      console.log(`Interation number ${index + 1}`);
      await queryRunner.manager.save(category);
    }

    // committing transaction now to save our changes
    await queryRunner.commitTransaction();
    result.imported = true;
  } catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
    console.error(err);
    result.imported = false;
  } finally {
    // releasing query runner which is manually created
    await queryRunner.release();
    return result;
  }
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
  addCategories,
  editCategory,
  removeCategory,
};

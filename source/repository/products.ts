import { Product } from "../db/entities/products";
import { AppDataSource } from "../db/connection";
import { ILike } from "typeorm";

const productRepository = AppDataSource.getRepository(Product);

const findProducts = async (): Promise<Product[]> => {
  let results = await productRepository.find();
  return results;
};

const findProductsByName = async (search: string): Promise<Product[]> => {
  let result = await productRepository.find({
    where: { name: ILike(`%${search}%`) },
    relations: {
      category: true,
    },
    order: {
      name: "ASC",
    },
    cache: true,
  });
  return result;
};

const addProduct = async (product: Product): Promise<Product> => {
  let newProduct = new Product(
    product.name,
    product.description,
    product.categoryId,
    product.price,
    product.stock
  );
  newProduct.createdAt = new Date();

  try {
    await productRepository.save(newProduct);
  } catch (err: unknown) {
    console.error(err);
  }

  return newProduct;
};

const findProductById = async (productId: number): Promise<Product | null> => {
  let result = await productRepository.findOneBy({ id: productId });
  return result;
};

const editProduct = async (product: Product): Promise<Product | null> => {
  const productToUpdate = await productRepository.findOneBy({ id: product.id });

  if (productToUpdate === null) return null;

  productToUpdate.name = product.name;
  productToUpdate.description = product.description;
  productToUpdate.categoryId = product.categoryId;
  productToUpdate.price = product.price;
  productToUpdate.stock = product.stock;
  productToUpdate.updatedAt = new Date();

  try {
    await productRepository.save(productToUpdate);
  } catch (err: unknown) {
    console.error(err);
  }

  return productToUpdate;
};

const removeProduct = async (
  productId: number
): Promise<{ isDeleted: boolean }> => {
  const productToRemove = await productRepository.findOneBy({
    id: productId,
  });

  if (productToRemove === null) return { isDeleted: false };

  try {
    await productRepository.remove(productToRemove);
  } catch (err: unknown) {
    console.error(err);
  }

  return { isDeleted: true };
};

export {
  findProducts,
  findProductsByName,
  findProductById,
  addProduct,
  editProduct,
  removeProduct,
};

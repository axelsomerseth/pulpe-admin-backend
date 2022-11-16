import { Product } from "../db/entities/products";
import { AppDataSource } from "../db/connection";

const productRepository = AppDataSource.getRepository(Product);

const findProducts = async (): Promise<Product[]> => {
  let results = await productRepository.find();
  return results;
};

const searchForProducts = async (search: string) => {
  // TODO: Implement database and return searched products by the given search. Must do it case-insensitive.
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
  await productRepository.save(newProduct);
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

  await productRepository.save(productToUpdate);
  return productToUpdate;
};

const removeProduct = async (
  productId: number
): Promise<{ isDeleted: boolean }> => {
  const productToRemove = await productRepository.findOneBy({
    id: productId,
  });

  if (productToRemove === null) return { isDeleted: false };

  await productRepository.remove(productToRemove);
  return { isDeleted: true };
};

export {
  findProducts,
  searchForProducts,
  findProductById,
  addProduct,
  editProduct,
  removeProduct,
};

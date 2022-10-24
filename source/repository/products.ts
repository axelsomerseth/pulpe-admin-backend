import { Product } from "../types/products";

// TODO: import db connection
const TABLE_NAME = "products";

const findProducts = async (): Promise<Product[]> => {
  let results: Product[] = [];
  // TODO: implement database and return a list of products.
  return results;
};

const searchForProducts = async (search: string) => {
  // TODO: Implement database and return searched products by the given search. Must do it case-insensitive.
};

const findProductById = async (productId: number) => {
  // let result: Product = {};
  // TODO: Implement database and return one product by the given id.
  // return result;
};

const addProduct = async (product: Product) => {
  // TODO: return the added product with his ID.
};

const editProduct = async (product: Product) => {
  // TODO: return the edited product.
};

const removeProduct = async (productId: number) => {
  // TODO: return the deleted rows
  return { deletedRows: 0 };
};

export {
  findProducts,
  searchForProducts,
  findProductById,
  addProduct,
  editProduct,
  removeProduct,
};

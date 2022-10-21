import { Product } from "../types/products";

// TODO: import db connection
const TABLE_NAME = "products";

const findProducts = async () => {
  // TODO: return a list of products.
};

const searchForProducts = async (search: string) => {
  // TODO: return search products by the given search. Must do it case-insensitive.
};

const findProductById = async (productId: number) => {
  // TODO: return one product by the given id.
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

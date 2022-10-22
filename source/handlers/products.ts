// TODO: implement UUID for products.
// import {
//   findProducts,
//   searchForProducts,
//   findProductById,
//   addProduct,
//   editProduct,
//   removeProduct,
// } from "../repository/products";
import { RequestHandler, Request, Response } from "express";
import { Product } from "../types/products";

const listProducts: RequestHandler = async (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const size = req.query.size || 10;
  const search = req.query.search || "";
  let list: Product[] = [];
  // if (search) {
  //   list = await searchForProducts(search);
  // } else {
  //   list = await findProducts();
  // }
  res.json({
    page: 1,
    size: list.length,
    data: list,
  });
};

const readProduct: RequestHandler = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  // const found = await findProductById(productId);
  const found: Product[] = [];
  if (found.length) {
    res.json(found[0]);
  } else {
    res.sendStatus(404);
  }
};

const createProduct: RequestHandler = async (req: Request, res: Response) => {
  const newProduct: Product = {
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId,
    price: req.body.price,
    stock: req.body.stock,
  };
  // const created = await addProduct(newProduct);
  const created: string[] = [];
  if (created.length) {
    res.json(created[0]);
  } else {
    res.sendStatus(500);
  }
};

const updateProduct: RequestHandler = async (req: Request, res: Response) => {
  const editedProduct: Product = {
    id: parseInt(req.params.productId),
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId,
    price: req.body.price,
    stock: req.body.stock,
  };
  // const updated = await editProduct(editedProduct);
  const updated: Product[] = [];
  if (updated.length) {
    res.json(updated[0]);
  } else {
    res.sendStatus(404);
  }
};

const deleteProduct: RequestHandler = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  // const deleted = await removeProduct(productId);
  const deleted = { deletedRows: 0 };
  if (deleted.deletedRows) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

export {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

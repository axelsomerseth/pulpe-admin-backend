import { RequestHandler, Request, Response } from "express";
import { Product } from "../db/entities/products";
import {
  findProducts,
  searchForProducts,
  findProductById,
  addProduct,
  editProduct,
  removeProduct,
} from "../repository/products";

const listProducts: RequestHandler = async (req: Request, res: Response) => {
  // TODO: implement pagination.
  // const page = (req.query?.page as unknown as number) || 1;
  // const size = (req.query?.size as unknown as number) || 10;
  const search = req.query?.search || "";
  let list: Product[] = [];
  if (search) {
    // TODO: implement search
    // list = await searchForProducts(search);
  } else {
    list = await findProducts();
  }
  res.status(200);
  res.json({
    page: 1,
    // size: list.length,
    data: list,
  });
};

const createProduct: RequestHandler = async (req: Request, res: Response) => {
  const newProduct = new Product(
    req.body?.name,
    req.body?.description,
    req.body?.categoryId as unknown as number,
    req.body?.price as unknown as number,
    req.body?.stock as unknown as number
  );
  const created = await addProduct(newProduct);
  if (created?.id) {
    res.status(201);
    res.json(created);
  } else {
    res.sendStatus(500);
  }
};

const readProduct: RequestHandler = async (req: Request, res: Response) => {
  const productId = req.params?.productId as unknown as number;
  const found = await findProductById(productId);
  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.sendStatus(404);
  }
};

const updateProduct: RequestHandler = async (req: Request, res: Response) => {
  const editedProduct = new Product(
    req.body?.name,
    req.body?.description,
    req.body?.categoryId as unknown as number,
    req.body?.price as unknown as number,
    req.body?.stock as unknown as number
  );
  editedProduct.id = req.params?.productId as unknown as number;
  const updated = await editProduct(editedProduct);
  if (updated) {
    res.status(200);
    res.json(updated);
  } else {
    res.sendStatus(404);
  }
};

const deleteProduct: RequestHandler = async (req: Request, res: Response) => {
  const productId = req.params?.productId as unknown as number;
  const result = await removeProduct(productId);
  if (result.isDeleted) {
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

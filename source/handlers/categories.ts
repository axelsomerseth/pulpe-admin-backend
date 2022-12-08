import { RequestHandler, Request, Response } from "express";
import { Category } from "../db/entities/categories";
import {
  findCategories,
  addCategories,
  addCategory,
  findCategoryById,
  editCategory,
  removeCategory,
} from "../repository/categories";

const listCategories: RequestHandler = async (req: Request, res: Response) => {
  // TODO: implement pagination.
  // const page = (req.query?.page as unknown as number) || 1;
  // const size = (req.query?.size as unknown as number) || 10;
  const list = await findCategories();
  res.status(200);
  res.send({
    page: 1,
    // size: list.length,
    data: list,
  });
};

const importCategories: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const payload = req.body;
  const categories: Category[] = [];
  payload.forEach((elem: Category) => {
    categories.push(new Category(elem?.name, elem?.description));
  });
  const result = await addCategories(categories);
  if (result.imported) {
    res.status(201);
    res.send();
  } else {
    res.sendStatus(500);
  }
};

const createCategory: RequestHandler = async (req: Request, res: Response) => {
  const newCategory = new Category(req.body?.name, req.body?.description);
  const created = await addCategory(newCategory);
  if (created.id) {
    res.status(201);
    res.send(created);
  } else {
    res.sendStatus(500);
  }
};

const readCategory: RequestHandler = async (req: Request, res: Response) => {
  const categoryId = req.params?.categoryId as unknown as number;
  const found = await findCategoryById(categoryId);
  if (found) {
    res.status(200);
    res.send(found);
  } else {
    res.sendStatus(404);
  }
};

const updateCategory: RequestHandler = async (req: Request, res: Response) => {
  const editedCategory = new Category(req.body?.name, req.body?.description);
  editedCategory.id = req.params?.categoryId as unknown as number;
  const updated = await editCategory(editedCategory);
  if (updated) {
    res.status(200);
    res.send(updated);
  } else {
    res.sendStatus(404);
  }
};

const deleteCategory: RequestHandler = async (req: Request, res: Response) => {
  const categoryId = req.params?.categoryId as unknown as number;
  const result = await removeCategory(categoryId);
  if (result.isDeleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

export {
  listCategories,
  importCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

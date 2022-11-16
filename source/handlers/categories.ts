import { RequestHandler, Request, Response } from "express";
import { Category } from "../db/entities/categories";
import {
  findCategories,
  addCategory,
  findCategoryById,
  editCategory,
  removeCategory,
} from "../repository/categories";

const listCategories: RequestHandler = async (req: Request, res: Response) => {
  const page = req.query?.page || 1;
  const size = req.query?.size || 10;
  const list = await findCategories();
  res.send({
    page,
    size,
    data: list,
  });
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

const createCategory: RequestHandler = async (req: Request, res: Response) => {
  const newCategory = new Category(req.body?.name, req.body?.description);
  const created = await addCategory(newCategory);
  if (created.id) {
    res.status(201);
    res.send(created);
  } else {
    res.status(500);
    res.send();
  }
};

const updateCategory: RequestHandler = async (req: Request, res: Response) => {
  const editedCategory = new Category(
    req.body?.name,
    req.body?.description,
    parseInt(req.params?.categoryId)
  );
  const updated = await editCategory(editedCategory);
  if (updated?.id) {
    res.status(200);
    res.json(updated);
  } else {
    res.sendStatus(404);
  }
};

const deleteCategory: RequestHandler = async (req: Request, res: Response) => {
  const categoryId = req.params?.categoryId as unknown as number;
  const deleted = await removeCategory(categoryId);
  if (deleted.isDeleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

export {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

import { findCategories } from "../repository/categories";
// const categoriesRepository = require("../repository/categories");
import { Handler, Request, Response } from "express";
import { Category } from "../types/categories";

const listCategories: Handler = async (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const size = req.query.size || 10;
  // const list: Category[] = await findCategories();
  const list: Category[] = [];
  res.send({
    page,
    size,
    data: list,
  });
};

const readCategory: Handler = async (req: Request, res: Response) => {
  const categoryId = req.params.categoryId;
  // const found = await categoriesRepository.getCategoryById(categoryId);
  const found: Category[] = [];
  if (found.length) {
    res.status(200);
    res.send(found[0]);
  } else {
    res.sendStatus(404);
  }
};

const createCategory: Handler = async (req: Request, res: Response) => {
  const newCategory: Category = {
    name: req.body.name,
    description: req.body.description,
  };
  // const created = await categoriesRepository.addCategory(newCategory);
  const created: Category[] = [];
  if (created.length) {
    res.status(201);
    res.send(created[0]);
  } else {
    res.status(500);
    res.send();
  }
};

const updateCategory: Handler = async (req: Request, res: Response) => {
  const editedCategory: Category = {
    id: parseInt(req.params.categoryId),
    name: req.body.name,
    description: req.body.description,
  };
  // const updated = await categoriesRepository.editCategory(editedCategory);
  const updated: Category[] = [];
  if (updated.length) {
    res.status(200);
    res.json(updated[0]);
  } else {
    res.sendStatus(404);
  }
};

const deleteCategory: Handler = async (req: Request, res: Response) => {
  const categoryId = req.params.categoryId;
  // const deleted = await categoriesRepository.deleteCategory(categoryId);
  const deleted = { deletedRows: 0 };
  if (deleted.deletedRows) {
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

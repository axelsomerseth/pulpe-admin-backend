// const categoriesRepository = require("../repository/categories");
import { RequestHandler, Request, Response } from "express";

const viewsHandler: RequestHandler = async (req: Request, res: Response) => {
  // const list = await categoriesRepository.listCategories();
  const list: string[] = [];
  res.render("home", {
    categories: list,
  });
};

export { viewsHandler };

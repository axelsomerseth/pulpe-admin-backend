// const categoriesRepository = require("../repository/categories");
import { Handler, Request, Response } from "express";

const viewsHandler: Handler = async (req: Request, res: Response) => {
  // const list = await categoriesRepository.listCategories();
  const list: string[] = [];
  res.render("home", {
    categories: list,
  });
};

export { viewsHandler };

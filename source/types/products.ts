interface IProduct {
  id?: number;
  name: string;
  description: string;
  categoryId: number;
  price: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export { IProduct };

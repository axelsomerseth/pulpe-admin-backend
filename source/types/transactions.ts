enum Movement {
  Invalid,
  In,
  Out,
}

enum TransactionTypes {
  // Inbound and outbound transactions
  Invalid = "Invalid",
  Adjustments = "Adjustments",
  Transfers = "Transfers",

  // Only Inbound transactions
  Receipts = "Receipts",
  Returns = "Returns",
  ItemsAddedThroughCycleCounts = "ItemsAddedThroughCycleCounts",

  // Only Outbound transactions
  Selling = "Selling",
  Issues = "Issues",
  ItemsRemovedThroughCycleCounts = "ItemsRemovedThroughCycleCounts",
}

interface ITransaction {
  id?: number;
  productId: number;
  movement: Movement;
  quantity: number;
  type: TransactionTypes;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export { ITransaction, Movement, TransactionTypes };

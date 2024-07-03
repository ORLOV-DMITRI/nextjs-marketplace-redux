export type ProductType = {
  id: string;
  title: string;
  price: number;
  thumbnail?: string
};
export type CartListType = {
  carts: Cart[];
};

export type Cart = {
  id: number;
  products: ProductType[];
};

export type CurrencyType = "$" | "Coin" | null;

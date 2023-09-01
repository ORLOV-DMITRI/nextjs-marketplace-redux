export type ProductType = {
  id: string;
  title: string;
  price: number;
};
export type CartListType = {
  carts: Cart[];
};

export type Cart = {
  id: number;
  products: ProductType[];
};

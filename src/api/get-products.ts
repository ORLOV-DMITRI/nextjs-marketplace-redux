import { Cart, ProductType } from "@/types/types";
import axios from "axios";
import { v4 } from "uuid";

export const getProducts = async () => {
  try {

    const req = await axios.get("https://dummyjson.com/carts");
    const data = await req.data;
    const productsFlat: ProductType[] = data.carts
      .map((cart: Cart) => cart.products)
      .flat();
    const products = productsFlat.map((product) => {
      product.id = v4();
      return product;
    });

    return products;
  } catch (error) {
    console.log(error);
  }
};

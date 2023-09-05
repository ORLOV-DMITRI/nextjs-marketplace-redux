import { RootState } from "@/store/store";
import { ProductType } from "@/types/types";

export const selectors = {
  shoppingList: (state: RootState) => state.basket.shoppingList,

  isInBasket: (state: RootState, product: ProductType) =>
    state.basket.shoppingList
      .map((productInfo) => productInfo.product)
      .includes(product),
  totalPrice: (state: RootState, id: string) =>
    state.basket.shoppingList.map((productInfo) => {
      if (productInfo.product.id === id) {
        return productInfo.totalPrice;
      }
    }),
  currentBuyStatus: (state: RootState) => state.basket.isGoodBuy,
};

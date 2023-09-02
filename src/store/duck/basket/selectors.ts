import { RootState } from "@/store/store";

export const selectors = {
  shoppingList: (state: RootState) => state.basket.shoppingList,

  isInBasket: (state: RootState, id: string) =>
    state.basket.shoppingList.find(
      (productInfo) => productInfo.product.id === id,
    ),
  totalPrice: (state: RootState, id: string) =>
    state.basket.shoppingList.map((productInfo) => {
      if (productInfo.product.id === id) {
        return productInfo.totalPrice;
      }
    }),
  currentBuyStatus: (state: RootState) => state.basket.isGoodBuy,
};

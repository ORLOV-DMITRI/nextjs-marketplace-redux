import { RootState } from "@/store/store";

export const selectors = {
  shoppingList: (state: RootState) => state.basket.shoppingList,

  isInBasket: (state: RootState, id: string) =>
    state.basket.shoppingList.find((product) => product.id === id),
};

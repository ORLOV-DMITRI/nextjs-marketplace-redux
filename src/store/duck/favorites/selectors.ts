import { RootState } from "@/store/store";
import { ProductType } from "@/types/types";

export const selectors = {
  favoritesList: (state: RootState) => state.favorites.favoritesList,

  isInFavoritesList: (state: RootState, product: ProductType) =>
    state.favorites.favoritesList.includes(product),
};

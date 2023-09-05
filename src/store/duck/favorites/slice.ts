import { ProductType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FavoritesState = {
  favoritesList: ProductType[];
};
const initialState: FavoritesState = {
  favoritesList: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoritesProduct: (state, action: PayloadAction<ProductType>) => {
      state.favoritesList.push(action.payload);
    },
    removeFavoritesProduct: (state, action: PayloadAction<string>) => {
      const filteredProducts = state.favoritesList.filter(
        (product) => product.id != action.payload,
      );
      state.favoritesList = [...filteredProducts];
    },
    clearFavoritesList: (state) => {
      state.favoritesList = [];
    },
  },
});

export const actions = favoritesSlice.actions;

export default favoritesSlice.reducer;

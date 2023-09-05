import { combineReducers } from "@reduxjs/toolkit";
import * as bankDuck from "./bank";
import * as basketDuck from "./basket";
import * as favoritesDuck from "./favorites";

export const selectors = {
  basket: basketDuck.selectors,
  bank: bankDuck.selectors,
  favorites: favoritesDuck.selectors,
};

export const actions = {
  basket: basketDuck.actions,
  bank: bankDuck.actions,
  favorites: favoritesDuck.actions,
};

export const rootReducer = combineReducers({
  basket: basketDuck.basketSlice.reducer,
  bank: bankDuck.bankSlice.reducer,
  favorites: favoritesDuck.favoritesSlice.reducer,
});

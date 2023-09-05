import { combineReducers } from "@reduxjs/toolkit";
import * as bankDuck from "./bank";
import * as basketDuck from "./basket";
import * as favoritesDuck from "./favorites";
import * as sortDuck from "./sort";
export const selectors = {
  basket: basketDuck.selectors,
  bank: bankDuck.selectors,
  favorites: favoritesDuck.selectors,
  sort: sortDuck.selectors,
};

export const actions = {
  basket: basketDuck.actions,
  bank: bankDuck.actions,
  favorites: favoritesDuck.actions,
  sort: sortDuck.actions,
};

export const rootReducer = combineReducers({
  basket: basketDuck.basketSlice.reducer,
  bank: bankDuck.bankSlice.reducer,
  favorites: favoritesDuck.favoritesSlice.reducer,
  sort: sortDuck.sortSlice.reducer,
});

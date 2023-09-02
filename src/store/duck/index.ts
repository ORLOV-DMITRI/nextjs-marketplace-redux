import { combineReducers } from "@reduxjs/toolkit";
import * as bankDuck from "./bank";
import * as basketDuck from "./basket";

export const selectors = {
  basket: basketDuck.selectors,
  bank: bankDuck.selectors,
};

export const actions = {
  basket: basketDuck.actions,
  bank: bankDuck.actions,
};

export const rootReducer = combineReducers({
  basket: basketDuck.basketSlice.reducer,
  bank: bankDuck.bankSlice.reducer,
});

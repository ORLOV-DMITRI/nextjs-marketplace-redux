import { combineReducers } from "@reduxjs/toolkit";
import * as basketDuck from "./basket";

export const selectors = {
  basket: basketDuck.selectors,
};

export const actions = {
  basket: basketDuck.actions,
};

export const rootReducer = combineReducers({
  basket: basketDuck.basketSlice.reducer,
});

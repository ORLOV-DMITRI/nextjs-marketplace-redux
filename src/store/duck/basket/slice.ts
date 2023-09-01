import { ProductType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type BasketState = {
  shoppingList: ProductType[];
};
const initialState: BasketState = {
  shoppingList: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setShoppingList: (state, action: PayloadAction<ProductType>) => {
      state.shoppingList.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const filteredProducts = state.shoppingList.filter(
        (product) => product.id !== action.payload,
      );
      state.shoppingList = [...filteredProducts];
    },
    // setProducts: (state, action: PayloadAction<ProductType[]>) => {
    //   state.products = action.payload;
    // },
  },
});

export const actions = basketSlice.actions;

export default basketSlice.reducer;

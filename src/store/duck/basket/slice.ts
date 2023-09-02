import { ProductType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProductInfoType = {
  product: ProductType;
  count: number;
  totalPrice: number;
};

export type BasketState = {
  shoppingList: ProductInfoType[];
  isGoodBuy: boolean;
};
const initialState: BasketState = {
  shoppingList: [],
  isGoodBuy: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setShoppingList: (state, action: PayloadAction<ProductType>) => {
      const productInfo: ProductInfoType = {
        product: action.payload,
        count: 1,
        totalPrice: action.payload.price,
      };
      state.shoppingList.push(productInfo);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const filteredProducts = state.shoppingList.filter(
        (productInfo) => productInfo.product.id != action.payload,
      );
      state.shoppingList = [...filteredProducts];
    },
    increment: (state, action: PayloadAction<string>) => {
      state.shoppingList.map((productInfo) => {
        if (productInfo.product.id === action.payload) {
          productInfo.count += 1;
          productInfo.totalPrice =
            productInfo.count * productInfo.product.price;
        }
      });
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.shoppingList.map((productInfo) => {
        if (productInfo.product.id === action.payload) {
          if (productInfo.count === 1) return;

          productInfo.count -= 1;
          productInfo.totalPrice =
            productInfo.count * productInfo.product.price;
        }
      });
    },
    clearShoppingList: (state) => {
      state.shoppingList = [];
      state.isGoodBuy = true;
    },
    updateBuyStatus: (state) => {
      state.isGoodBuy = false;
    },
  },
});

export const actions = basketSlice.actions;

export default basketSlice.reducer;

import { CurrencyType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BankType = {
  dollar: number;
  coin: number;
};
const initialState: BankType = {
  dollar: 100,
  coin: 100,
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    setDollar: (state, action: PayloadAction<number | null>) => {
      if (action.payload) {
        state.dollar += Number(action.payload.toFixed(1));
      }
    },
    setCoin: (state, action: PayloadAction<number | null>) => {
      if (action.payload) {
        state.coin += Number(action.payload.toFixed(1));
        state.dollar -= Number(action.payload.toFixed(1));
      }
    },
    buyProducts: (
      state,
      action: PayloadAction<{ currency: CurrencyType; totalPrice: number }>,
    ) => {
      if (action.payload.currency === "$") {
        state.dollar -= action.payload.totalPrice;
      }
      if (action.payload.currency === "Coin") {
        state.coin -= action.payload.totalPrice;
      }
    },
  },
});

export const actions = bankSlice.actions;

export default bankSlice.reducer;

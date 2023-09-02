import { CurrencyType } from "@/components/refill-balance/refill-balance";
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
        state.dollar += action.payload;
      }
    },
    setCoin: (state, action: PayloadAction<number | null>) => {
      if (action.payload) {
        state.coin += action.payload;
        state.dollar -= action.payload;
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

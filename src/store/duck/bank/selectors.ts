import { RootState } from "@/store/store";

export const selectors = {
  getBalance: (state: RootState) => state.bank,
};

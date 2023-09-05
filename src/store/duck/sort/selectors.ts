import { RootState } from "@/store/store";

export const selectors = {
  sortList: (state: RootState) => state.sort.sortList,

  currentSort: (state: RootState) => state.sort.currentSort,
};

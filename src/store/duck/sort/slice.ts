import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SortListType =
  | "без сортировки"
  | "cначала дорогие"
  | "сначала недорогие"
  | "по алфавиту А-Я"
  | "по алфавиту Я-А";

export type FavoritesState = {
  sortList: SortListType[];
  currentSort: SortListType;
};
const initialState: FavoritesState = {
  sortList: [
    "без сортировки",
    "cначала дорогие",
    "сначала недорогие",
    "по алфавиту А-Я",
    "по алфавиту Я-А",
  ],
  currentSort: "сначала недорогие",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setCurrentSort: (state, action: PayloadAction<SortListType>) => {
      state.currentSort = action.payload;
    },
  },
});

export const actions = sortSlice.actions;

export default sortSlice.reducer;

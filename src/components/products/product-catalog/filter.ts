import { SortListType } from "@/store/duck/sort/slice";
import { ProductType } from "@/types/types";

export const useFilter = (
  currentSort: SortListType,
  products: ProductType[],
) => {
  const firstProducts = products;

  if (currentSort === "сначала недорогие") {
    return products.sort((a, b) => a.price - b.price);
  }

  if (currentSort === "cначала дорогие") {
    return products.sort((a, b) => b.price - a.price);
  }

  if (currentSort === "по алфавиту А-Я") {
    return products.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > a.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  if (currentSort === "по алфавиту Я-А") {
    return products.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() < a.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return products;
  }
};

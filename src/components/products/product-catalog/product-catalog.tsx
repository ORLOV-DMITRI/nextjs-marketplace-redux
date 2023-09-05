"use client";
import { selectors } from "@/store/duck";
import { useAppSelector } from "@/store/hooks";
import { ProductType } from "@/types/types";
import { FC } from "react";
import ProductCard from "../product-card/product-card";
import { useFilter } from "./filter";
import "./style.scss";

type ProductCatalogType = {
  products: ProductType[];
};

const ProductCatalog: FC<ProductCatalogType> = ({ products }) => {
  const currentSort = useAppSelector(selectors.sort.currentSort);

  const filteredProducts = useFilter(currentSort, products);

  return (
    <ul className="catalog">
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
};
export default ProductCatalog;

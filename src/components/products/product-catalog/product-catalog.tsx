import { ProductType } from "@/types/types";
import { FC } from "react";
import ProductCard from "../product-card/product-card";
import "./style.scss";

type ProductCatalogType = {
  products: ProductType[];
};

const ProductCatalog: FC<ProductCatalogType> = ({ products }) => {
  return (
    <ul className="catalog">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
};
export default ProductCatalog;

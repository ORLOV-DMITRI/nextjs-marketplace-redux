"use client";
import { PageStatuses } from "@/components/basket/page-statuses/page-statuses";
import ProductCatalog from "@/components/products/product-catalog/product-catalog";
import { selectors } from "@/store/duck";
import { useAppSelector } from "@/store/hooks";

const Favorites = () => {
  const favoriteProducts = useAppSelector(selectors.favorites.favoritesList);

  if (favoriteProducts.length === 0) {
    return <PageStatuses mode="no products" page="favorites" />;
  }
  return (
    <div className="favorites__content">
      <ProductCatalog products={favoriteProducts} />
    </div>
  );
};

export default Favorites;

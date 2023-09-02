import { getProducts } from "@/api/get-products";
import ProductCatalog from "@/components/products/product-catalog/product-catalog";

export default async function Home() {
  const products = await getProducts();

  return (
    <section className="main">
      <div className="main__container">
        <ProductCatalog products={products} />
      </div>
    </section>
  );
}

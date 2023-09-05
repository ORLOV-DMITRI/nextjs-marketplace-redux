import { getProducts } from "@/api/get-products";
import ProductCatalog from "@/components/products/product-catalog/product-catalog";
import "./style.scss";
export default async function Home() {
  const products = await getProducts();

  return (
    <section className="home">
      <div className="home__container">
        <div className="home__header">
          <div className="container">
            <h1 className="home__title title">Каталог</h1>
          </div>
        </div>
        <ProductCatalog products={products} />
      </div>
    </section>
  );
}

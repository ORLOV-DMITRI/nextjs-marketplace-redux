import { getProducts } from "@/api/get-products";
import ProductCatalog from "@/components/products/product-catalog/product-catalog";
import { Sort } from "@/components/sort/sort";
import "./style.scss";
export default async function Home() {

  const products = await getProducts();

  return (
    <section className="home">
      <div className="home__container">
        <div className="container">
          <div className="home__header">
            <h1 className="home__title title">Каталог</h1>
            <Sort className="home__sort" />
          </div>
        </div>
        <ProductCatalog products={products || []} />
      </div>
    </section>
  );
}

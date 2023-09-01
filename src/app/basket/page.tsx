import { BasketContent } from "@/components/basket-content/basket-content";
import "./style.scss";

const Basket = () => {
  return (
    <section className="basket">
      <div className="basket__container">
        <h1 className="basket__title">Корзина</h1>
        <BasketContent />
      </div>
    </section>
  );
};

export default Basket;

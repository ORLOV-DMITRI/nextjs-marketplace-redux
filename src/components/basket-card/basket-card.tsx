import Image from "next/image";
import { CountProducts } from "../count-products/count-products";

import { ProductType } from "@/types/types";
import { FC } from "react";
import "./style.scss";

type BasketCardType = {
  product: ProductType;
};
export const BasketCard: FC<BasketCardType> = ({ product }) => {
  return (
    <li className="basket-card">
      <div className="basket-card__img">
        <Image
          src={"/product1.jpg"}
          width={80}
          height={80}
          alt="Product Image"
        />
      </div>
      <div className="basket-card__info">
        <p className="basket-card__title">{product.title}</p>
        <div className="basket-card__price">
          <p>{product.price} $</p>
          <span className="basket-card__piece">за шт</span>
        </div>
      </div>
      <CountProducts className="basket-card__counter" />
      <div className="basket-card__total-price">
        <span>100 $</span>
      </div>
    </li>
  );
};

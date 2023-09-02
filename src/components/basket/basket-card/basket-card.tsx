import Image from "next/image";
import { CountProducts } from "../count-products/count-products";

import { actions, selectors } from "@/store/duck";
import { ProductInfoType } from "@/store/duck/basket/slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC } from "react";
import DeleteIcon from "../../../../public/delete.svg";
import "./style.scss";

type BasketCardType = {
  productInfo: ProductInfoType;
};
export const BasketCard: FC<BasketCardType> = ({ productInfo }) => {
  const dispatch = useAppDispatch();
  const { product, count } = productInfo;
  const totalPrice = useAppSelector((state) =>
    selectors.basket.totalPrice(state, product.id),
  );

  const handleDeleteProduct = () => {
    dispatch(actions.basket.removeProduct(product.id));
  };
  return (
    <li className="basket-card">
      <button className="basket-card__delete" onClick={handleDeleteProduct}>
        <DeleteIcon />
      </button>
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
      <CountProducts
        className="basket-card__counter"
        count={count}
        productId={product.id}
      />
      <div className="basket-card__total-price">
        <span>{totalPrice} $</span>
      </div>
    </li>
  );
};

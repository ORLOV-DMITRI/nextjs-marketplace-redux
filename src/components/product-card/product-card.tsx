"use client";
import PrimaryButton from "@/assets/ui/primary-button/primary-button";
import { actions, selectors } from "@/store/duck";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProductType } from "@/types/types";
import Image from "next/image";
import { FC, useState } from "react";
import CheckIcon from "../../../public/checked.svg";
import "./style.scss";
type ProductCardType = {
  product: ProductType;
};

const ProductCard: FC<ProductCardType> = ({ product }) => {
  const hasShoppingList = useAppSelector((state) =>
    selectors.basket.isInBasket(state, product.id),
  );

  const [inBasket, setInBasket] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const hadleAddingToBasket = () => {
    if (hasShoppingList) {
      dispatch(actions.basket.removeProduct(product.id));
      setInBasket(false);
    } else {
      dispatch(actions.basket.setShoppingList(product));
      setInBasket(true);
    }
  };

  return (
    <li
      className={`product ${hasShoppingList ? "shadow-check" : "shadow-xyi"}`}
    >
      <div className="product__img">
        <Image
          src={"/product1.jpg"}
          alt="Product Image"
          width={100}
          height={120}
          style={{ objectFit: "contain", width: "100%" }}
        />
      </div>
      <div className="product__info">
        <h4 className="product__price">{product.price}$</h4>
        <p className="product__title">{product.title}</p>

        <PrimaryButton
          className={`product__btn ${hasShoppingList ? "checked" : ""}`}
          onClick={hadleAddingToBasket}
        >
          {hasShoppingList ? <CheckIcon /> : "В корзину"}
        </PrimaryButton>
      </div>
    </li>
  );
};

export default ProductCard;

"use client";
import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import { actions, selectors } from "@/store/duck";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProductType } from "@/types/types";
import Image from "next/image";
import { FC } from "react";
import CheckIcon from "../../../../public/checked.svg";
import "./style.scss";

type ProductCardType = {
  product: ProductType;
};

const ProductCard: FC<ProductCardType> = ({ product }) => {
  const dispatch = useAppDispatch();

  const hasShoppingList = useAppSelector((state) =>
    selectors.basket.isInBasket(state, product.id),
  );

  const handleAddingToBasket = () => {
    if (hasShoppingList) {
      dispatch(actions.basket.removeProduct(product.id));
    } else {
      dispatch(actions.basket.setShoppingList(product));
    }
  };

  return (
    <li className={`product `}>
      <Image
        src={"/product1.jpg"}
        alt="Product Image"
        width={100}
        height={120}
        className="product__img"
      />

      <div className="product__info">
        <h4 className="product__price">{product.price}$</h4>
        <p className="product__title">{product.title}</p>

        <PrimaryButton
          className={`product__btn ${hasShoppingList ? "checked" : ""}`}
          onClick={handleAddingToBasket}
        >
          {hasShoppingList ? <CheckIcon /> : "В корзину"}
        </PrimaryButton>
      </div>
    </li>
  );
};

export default ProductCard;

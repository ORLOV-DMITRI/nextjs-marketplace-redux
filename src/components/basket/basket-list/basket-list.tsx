"use client";
import { selectors } from "@/store/duck";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import { BasketCard } from "../basket-card/basket-card";
import "./style.scss";

type BasketListType = {
  className?: string;
};

export const BasketList: FC<BasketListType> = ({ className = "" }) => {
  const shoppingList = useAppSelector(selectors.basket.shoppingList);
  console.log(shoppingList);
  
  return (
    <ul className={`basket-list ${className}`}>
      {shoppingList.map((productInfo) => (
        <BasketCard productInfo={productInfo} key={productInfo.product.id} />
      ))}
    </ul>
  );
};

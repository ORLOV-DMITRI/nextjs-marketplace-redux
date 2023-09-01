"use client";
import { selectors } from "@/store/duck";
import { useAppSelector } from "@/store/hooks";
import { BasketCard } from "../basket-card/basket-card";
import "./style.scss";

export const BasketList = () => {
  const shoppingList = useAppSelector(selectors.basket.shoppingList);
  return (
    <ul className="basket-list">
      {shoppingList.map((product) => (
        <BasketCard product={product} key={product.id} />
      ))}
    </ul>
  );
};

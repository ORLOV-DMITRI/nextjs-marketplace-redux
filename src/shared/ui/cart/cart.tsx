"use client";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import "./style.scss";

export const Cart = () => {
  const shoppingProduct = useAppSelector((state) => state.basket.shoppingList);

  const hasShopping = shoppingProduct.length === 0 ? false : true;

  return (
    <div className="cart">
      <Image
        src="/basket.svg"
        alt="Basket"
        width={24}
        height={25}
        className="cart__img"
      />

      {hasShopping && (
        <span className="cart__indicator">{shoppingProduct.length}</span>
      )}
    </div>
  );
};

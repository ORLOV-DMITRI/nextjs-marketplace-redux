"use client";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import "./style.scss";

type ProductCounterType = {
  type: "basket" | "favorites";
  className?: string;
  children?: React.ReactNode;
};

export const ProductCounter: FC<ProductCounterType> = ({
  type,
  className,
  children,
}) => {
  const useSelectCountedItem = () => {
    if (type === "basket") {
      return useAppSelector((state) => state.basket.shoppingList);
    }
    if (type === "favorites") {
      return useAppSelector((state) => state.favorites.favoritesList);
    }
  };

  const products = useSelectCountedItem();

  const hasShopping = products?.length === 0 ? false : true;
  return (
    <div className={`product-counter ${className}`}>
      {/* <Image
        src={type === "basket" ? "/basket.svg" : "/heart.svg"}
        alt={type === "basket" ? "basket icon" : "heart icon"}
        width={24}
        height={25}
        className="product-counter__img"
        style={{ color: "white", fill: "white" }}
      /> */}

      {/* {type === "basket" ? <Basket /> : <Heart />} */}
      {children}

      {hasShopping && (
        <span className="product-counter__indicator">{products?.length}</span>
      )}
    </div>
  );
};

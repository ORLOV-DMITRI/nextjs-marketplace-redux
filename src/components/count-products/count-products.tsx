"use client";
import { actions } from "@/store/duck";
import { useAppDispatch } from "@/store/hooks";
import { FC } from "react";
import MinusIcon from "../../../public/minus.svg";
import PlusIcon from "../../../public/plus.svg";
import "./style.scss";
type CountProductsType = {
  className?: string;
  count: number;
  productId: string;
};

export const CountProducts: FC<CountProductsType> = ({
  count,
  className = "",
  productId,
}) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(actions.basket.increment(productId));
  };
  const decrement = () => {
    dispatch(actions.basket.decrement(productId));
  };
  return (
    <div className={`counter ${className}`}>
      <button className="counter__operation" onClick={decrement}>
        <MinusIcon />
      </button>
      <span>{count}</span>
      <button className="counter__operation" onClick={increment}>
        <PlusIcon />
      </button>
    </div>
  );
};

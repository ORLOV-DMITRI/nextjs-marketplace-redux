import { Cart } from "@/shared/ui/cart/cart";
import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import Link from "next/link";
import { FC } from "react";
import "./style.scss";

type LinkBasketType = {
  className: string;
};

export const LinkBasket: FC<LinkBasketType> = ({ className }) => {
  return (
    <Link href={"/basket"} className={`link-basket ${className}`}>
      <PrimaryButton className="link-basket__btn">Корзина</PrimaryButton>
      <Cart />
    </Link>
  );
};

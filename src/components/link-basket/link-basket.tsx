import PrimaryButton from "@/assets/ui/primary-button/primary-button";
import Link from "next/link";
import { FC } from "react";
import { Cart } from "../cart/cart";

type LinkBasketType = {
  className: string;
};

export const LinkBasket: FC<LinkBasketType> = ({ className }) => {
  return (
    <Link href={"/basket"} className={`${className}`}>
      <PrimaryButton className="header__btn">Корзина</PrimaryButton>
      <Cart />
    </Link>
  );
};

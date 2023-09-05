"use client";
import Link from "next/link";
import CreditIcon from "../../../public/credit-card.svg";
import HeartIcon from "../../../public/heart-large.svg";
import HomeIcon from "../../../public/home.svg";
import BasketIcon from "../../../public/shopping-cart.svg";

import { ProductCounter } from "@/shared/ui/product-counter/product-counter";
import { usePathname } from "next/navigation";
import "./style.scss";

export const BottomNav = () => {
  const route = usePathname();
  console.log(route);

  return (
    <div className="bottom-nav">
      <Link href={"/"} className="bottom-nav__item">
        <HomeIcon className={route === "/" ? "bottom-nav__icon" : ""} />
      </Link>
      <Link href={"/bank"} className="bottom-nav__item">
        <CreditIcon className={route === "/bank" ? "bottom-nav__icon" : ""} />
      </Link>
      <Link href={"/favorites"} className="bottom-nav__item">
        <ProductCounter type="favorites">
          <HeartIcon
            className={route === "/favorites" ? "bottom-nav__icon" : ""}
          />
        </ProductCounter>
      </Link>
      <Link href={"/basket"} className="bottom-nav__item">
        <ProductCounter type="basket">
          <BasketIcon
            className={route === "/basket" ? "bottom-nav__icon" : ""}
          />
        </ProductCounter>
      </Link>
    </div>
  );
};

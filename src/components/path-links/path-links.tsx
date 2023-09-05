"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowRight from "../../../public/chevron-right.svg";
import "./style.scss";
export const PathLinks = () => {
  const route = usePathname();

  const currentRoutePage = new Map([
    ["/basket", "Корзина"],
    ["/favorites", "Избранное"],
    ["/bank", "Пополнение счета"],
  ]);

  return (
    <div className="container">
      <div className="route-links">
        <Link href={"/"}> Каталог </Link>
        <ArrowRight />
        <p className="route-links__current">{currentRoutePage.get(route)}</p>
      </div>
    </div>
  );
};

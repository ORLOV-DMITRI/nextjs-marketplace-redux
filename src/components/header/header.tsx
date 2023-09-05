"use client";
import { actions, selectors } from "@/store/duck";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "../nav-bar/nav-bar";
import "./style.scss";

export const Header = () => {
  const dispatch = useAppDispatch();
  const basketState = useAppSelector(selectors.basket.currentBuyStatus);

  const resetBasketState = () => {
    if (basketState) {
      dispatch(actions.basket.updateBuyStatus());
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <Link href={"/"} className="header__logo" onClick={resetBasketState}>
            <Image
              src="/logo.svg"
              alt="Vercel Logo"
              width={50}
              height={50}
              priority
              className="header__img"
            />
            <h1 className="header__title">
              <span className="logo-highlight">M</span>arketplace
            </h1>
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

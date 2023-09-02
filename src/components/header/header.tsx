"use client";
import { actions, selectors } from "@/store/duck";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccountBalance } from "../account-balance/account-balance";
import { LinkBasket } from "../link-basket/link-basket";
import "./style.scss";

export const Header = () => {
  const route = usePathname();
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
            />
            <h1>
              <span className="logo-highlight">M</span>arketplace
            </h1>
          </Link>

          {route === "/" && <LinkBasket className="header__basket" />}
          {route === "/basket" && <AccountBalance text="Пополнить баланс" />}
          {route === "/bank" && (
            <>
              <AccountBalance /> <LinkBasket className="header__basket" />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

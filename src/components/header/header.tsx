import PrimaryButton from "@/assets/ui/primary-button/primary-button";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "../cart/cart";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <Link href={"/"} className="header__logo">
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
          <Link href={"/basket"} className="header__basket">
            <PrimaryButton className="header__btn">Корзина</PrimaryButton>

            <Cart />
          </Link>
        </div>
      </div>
    </header>
  );
};

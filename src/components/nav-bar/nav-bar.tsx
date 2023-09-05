import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import { ProductCounter } from "@/shared/ui/product-counter/product-counter";
import Link from "next/link";
import HeartIcon from "../../../public/Vector.svg";
import Basket from "../../../public/basket1.svg";
import { NavItem } from "../nav-item/nav-item";
import "./style.scss";

export const NavBar = () => {
  return (
    <nav className="nav">
      <NavItem />

      <PrimaryButton>
        <Link href="/favorites" className="nav__items">
          <span>Избранное</span>
          <ProductCounter type="favorites">
            <HeartIcon />
          </ProductCounter>
        </Link>
      </PrimaryButton>
      <PrimaryButton>
        <Link href="/basket" className="nav__items">
          <span>Корзина</span>
          <ProductCounter type="basket">
            <Basket />
          </ProductCounter>
        </Link>
      </PrimaryButton>
    </nav>
  );
};

import { useState } from "react";
import ArrowDown from "../../../public/chevron-down.svg";
import ArrowUp from "../../../public/chevron-up.svg";

import { selectors } from "@/store/duck";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import "./style.scss";
export const NavItem = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const balance = useAppSelector(selectors.bank.getBalance);

  const subMenu = () => {
    if (isOpen) {
      return (
        <div
          className="nav-item__submenu"
          onMouseLeave={() => setIsOpen(false)}
        >
          <p>
            {balance.coin.toFixed(1)} <span>C</span>
          </p>
          <p>
            {balance.dollar.toFixed(1)} <span>$</span>
          </p>
          <Link href={"bank"} className="nav-item__link">
            Пополнить
          </Link>
        </div>
      );
    }
  };
  return (
    <div className="nav-item" onClick={() => setIsOpen(!isOpen)}>
      <button className="nav-item__btn">
        <span>Баланс</span>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </button>
      {subMenu()}
    </div>
  );
};

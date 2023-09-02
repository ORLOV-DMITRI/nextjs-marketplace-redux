"use client";
import { selectors } from "@/store/duck";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import "./style.scss";

type AccountBalanceType = {
  text?: string;
  className?: string;
};

export const AccountBalance: FC<AccountBalanceType> = ({
  text,
  className = "",
}) => {
  const balance = useAppSelector(selectors.bank.getBalance);

  return (
    <div className={`balance ${className}`}>
      <h4>Баланс: </h4>
      <span className="balance__info"> {balance.dollar.toFixed(1)} $</span>
      <span className="balance__info"> {balance.coin.toFixed(1)} Coin</span>

      {/* {text && (
        <Link href={"/bank"}>
          <p className="balance__link">{text}</p>
        </Link>
      )} */}
    </div>
  );
};

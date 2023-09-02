"use client";
import { useState } from "react";
import { CurrencyCard } from "../currency-card/currency-card";
import { RefillCoin } from "../refill-coin/refill-coin";
import { RefillDollar } from "../refill-dollar/refill-dollar";
import "./style.scss";

export type CurrencyType = "$" | "Coin" | null;

export const RefillBalance = () => {
  const [currency, setCurrency] = useState<CurrencyType>(null);
  const [isComplet, setIsComplet] = useState<boolean>(false);

  const hadleSetCurrencyDollar = () => {
    setCurrency("$");
    setIsComplet(false);
  };
  const hadleSetCurrencyCoin = () => {
    setCurrency("Coin");
    setIsComplet(false);
  };

  return (
    <>
      <div className="refill">
        <CurrencyCard
          handleClick={hadleSetCurrencyDollar}
          currency={currency}
          size="large"
          text="$"
        />
        <CurrencyCard
          handleClick={hadleSetCurrencyCoin}
          currency={currency}
          size="large"
          text="Coin"
        />

        {/* <div
          className={`refill__dollar refill__card ${
            currency === "$" && "fill"
          }`}
          onClick={hadleSetCurrencyDollar}
        >
          $
        </div>
        <div
          className={`refill__dollar refill__card ${
            currency === "Coin" && "fill"
          }`}
          onClick={hadleSetCurrencyCoin}
        >
          Coin
        </div> */}
      </div>

      {currency === "$" && (
        <RefillDollar isComplet={isComplet} setComplet={setIsComplet} />
      )}
      {currency === "Coin" && (
        <RefillCoin isComplet={isComplet} setComplet={setIsComplet} />
      )}
    </>
  );
};

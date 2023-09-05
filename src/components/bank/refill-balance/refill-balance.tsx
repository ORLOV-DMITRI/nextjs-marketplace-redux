"use client";
import { CurrencyType } from "@/types/types";
import { useState } from "react";
import { CurrencyCard } from "../../../shared/ui/currency-card/currency-card";
import { RefillCoin } from "../refill-coin/refill-coin";
import { RefillDollar } from "../refill-dollar/refill-dollar";

import "./style.scss";

export const RefillBalance = () => {
  const [currency, setCurrency] = useState<CurrencyType>(null);

  const [isComplet, setIsComplet] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const hadleSetCurrencyDollar = () => {
    if (loading) return;
    setCurrency("$");
    setIsComplet(false);
  };

  const hadleSetCurrencyCoin = () => {
    if (loading) return;

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
      </div>

      {currency === "$" && (
        <RefillDollar
          isComplet={isComplet}
          setComplet={setIsComplet}
          isLoading={loading}
          setLoading={setLoading}
        />
      )}
      {currency === "Coin" && (
        <RefillCoin
          isComplet={isComplet}
          setComplet={setIsComplet}
          isLoading={loading}
          setLoading={setLoading}
        />
      )}
    </>
  );
};

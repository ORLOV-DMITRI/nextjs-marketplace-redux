import { CurrencyType } from "@/types/types";
import { FC } from "react";
import "./style.scss";

type CurrencyCardType = {
  handleClick: () => void;
  currency: CurrencyType;
  text: string;
  size: "large" | "small";
};

export const CurrencyCard: FC<CurrencyCardType> = ({
  handleClick,
  currency,
  text,
  size,
}) => {
  const fill = currency === text ? "fill" : "";
  return (
    <div
      className={`currency-card ${fill}  currency-card__${size}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

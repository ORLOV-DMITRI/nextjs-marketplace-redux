import { FC } from "react";
import { CurrencyType } from "../refill-balance/refill-balance";
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
  return (
    <div
      className={`currency-card ${
        currency === text && "fill"
      }  currency-card_${size}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import { CurrencyType } from "@/types/types";
import { FC, useState } from "react";
import { CurrencyCard } from "../../../shared/ui/currency-card/currency-card";
import "./style.scss";

type CurrencySelectType = {
  currency: CurrencyType;
  className?: string;
  handleSetDollar: () => void;
  handleSetCoin: () => void;
};

export const CurrencySelect: FC<CurrencySelectType> = ({
  currency,
  handleSetCoin,
  handleSetDollar,
  className = "",
}) => {
  const [openSelect, setIsOpenSelect] = useState<boolean>(false);

  return (
    <div className={`select ${className}`}>
      <PrimaryButton
        className="select__btn"
        onClick={() => setIsOpenSelect(!openSelect)}
      >
        Выберете способ оплаты
      </PrimaryButton>
      <div className={`select__currency`}>
        {openSelect && (
          <>
            <CurrencyCard
              handleClick={handleSetDollar}
              currency={currency}
              size="small"
              text="$"
            />
            <CurrencyCard
              handleClick={handleSetCoin}
              currency={currency}
              size="small"
              text="Coin"
            />
          </>
        )}
      </div>
    </div>
  );
};

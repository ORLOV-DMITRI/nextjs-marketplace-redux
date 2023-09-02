import PrimaryButton from "@/assets/ui/primary-button/primary-button";
import { FC, useState } from "react";
import { CurrencyCard } from "../currency-card/currency-card";
import { CurrencyType } from "../refill-balance/refill-balance";
import "./style.scss";

type CurrencySelectType = {
  currency: CurrencyType;
  handleSetDollar: () => void;
  handleSetCoin: () => void;
};

export const CurrencySelect: FC<CurrencySelectType> = ({
  currency,
  handleSetCoin,
  handleSetDollar,
}) => {
  const [openSelect, setIsOpenSelect] = useState<boolean>(false);

  return (
    <div className="select">
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

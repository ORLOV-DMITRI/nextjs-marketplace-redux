import { AccountBalance } from "@/components/account-balance/account-balance";
import { selectors } from "@/store/duck";
import { useAppSelector } from "@/store/hooks";
import { CurrencyType } from "@/types/types";
import { FC, useState } from "react";
import { CurrencySelect } from "../currency-select/currency-select";
import { PaymentOperation } from "../payment-operation/payment-operation";
import "./style.scss";

type PaymentDetailsType = {
  className?: string;
};

export const PaymentDetails: FC<PaymentDetailsType> = ({ className = "" }) => {
  const shoppingList = useAppSelector(selectors.basket.shoppingList);

  const [currency, setCurrency] = useState<CurrencyType>("$");

  const hadleSetCurrencyDollar = () => {
    setCurrency("$");
  };
  const hadleSetCurrencyCoin = () => {
    setCurrency("Coin");
  };

  const totalPrice = shoppingList
    .map((productInfo) => productInfo.totalPrice)
    .reduce((accum, price) => accum + price);

  const totalCountProduct = shoppingList
    .map((productInfo) => productInfo.count)
    .reduce((accum, count) => accum + count);

  return (
    <div className={`pay-details ${className}`} id="pay">
      <div className="pay-details__delivery">
        <h4>Доставка в пункт выдачи</h4>
        <p>деревня Кудыкины Горы</p>
      </div>
      <AccountBalance className="pay-details__balance" />

      <CurrencySelect
        currency={currency}
        handleSetDollar={hadleSetCurrencyDollar}
        handleSetCoin={hadleSetCurrencyCoin}
      />

      <div className="pay-details__total">
        <p>Товары, {totalCountProduct} шт</p>
        <p>
          {totalPrice} {currency}
        </p>
      </div>
      <div className="pay-details__price">
        <h2>Итого</h2>
        <h2>
          {totalPrice} {currency}
        </h2>
      </div>
      <PaymentOperation totalPrice={totalPrice} currency={currency} />
    </div>
  );
};

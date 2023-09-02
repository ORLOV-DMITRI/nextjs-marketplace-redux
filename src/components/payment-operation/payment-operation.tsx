import PrimaryButton from "@/assets/ui/primary-button/primary-button";
import { actions, selectors } from "@/store/duck";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { FC, useState } from "react";
import { CurrencyType } from "../refill-balance/refill-balance";
import "./style.scss";

type PaymentOperationType = {
  totalPrice: number;
  currency: CurrencyType;
};

export const PaymentOperation: FC<PaymentOperationType> = ({
  totalPrice,
  currency,
}) => {
  const [isGoodBuy, setIsGoodBuy] = useState(false);

  const dispatch = useAppDispatch();

  const balance = useAppSelector(selectors.bank.getBalance);

  const currentBalance = currency === "$" ? balance.dollar : balance.coin;

  const checkBalance = currentBalance >= totalPrice ? true : false;

  const handleBuyProducts = () => {
    dispatch(
      actions.bank.buyProducts({
        currency: currency,
        totalPrice: totalPrice,
      }),
    );
    dispatch(actions.basket.clearShoppingList());
  };
  return (
    <>
      {!checkBalance && (
        <>
          <div className="error">
            <p> Не достаточно средств в кошельке {currency}</p>
          </div>
          <Link href={"/bank"}>
            <PrimaryButton className="error-btn">Пополнить счёт</PrimaryButton>
          </Link>
        </>
      )}
      {checkBalance && (
        <PrimaryButton
          className="pay-btn"
          disabled={!checkBalance}
          onClick={handleBuyProducts}
        >
          Оплатить заказ
        </PrimaryButton>
      )}
    </>
  );
};

"use client";
import { BasketList } from "@/components/basket-list/basket-list";
import { BasketStatus } from "@/components/basket-status/basket-status";
import { PaymentDetails } from "@/components/payment-details/payment-details";
import { actions, selectors } from "@/store/duck";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./style.scss";

const Basket = () => {
  const dispatch = useAppDispatch();
  const shoppingList = useAppSelector(selectors.basket.shoppingList);
  const buyState = useAppSelector(selectors.basket.currentBuyStatus);

  const resetBasketState = () => {
    dispatch(actions.basket.updateBuyStatus());
  };

  if (buyState) {
    return <BasketStatus mode="succes buy" onClick={resetBasketState} />;
  }
  if (shoppingList.length === 0) {
    return <BasketStatus mode="no products" />;
  }

  return (
    <div className="basket-content">
      <BasketList className="basket-content__products" />
      <PaymentDetails className="basket-pay" />
    </div>
  );
};

export default Basket;

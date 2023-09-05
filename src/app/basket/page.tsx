"use client";
import { BasketList } from "@/components/basket/basket-list/basket-list";
import { PageStatuses } from "@/components/basket/page-statuses/page-statuses";
import { PaymentDetails } from "@/components/basket/payment-details/payment-details";
import { actions, selectors } from "@/store/duck";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./style.scss";

const Basket = () => {
  const dispatch = useAppDispatch();
  const shoppingList = useAppSelector(selectors.basket.shoppingList);
  const buyStatus = useAppSelector(selectors.basket.currentBuyStatus);

  const resetBasketState = () => {
    dispatch(actions.basket.updateBuyStatus());
  };

  if (buyStatus) {
    return <PageStatuses mode="succes buy" onClick={resetBasketState} />;
  }
  if (shoppingList.length === 0) {
    return <PageStatuses mode="no products" page={"basket"} />;
  }

  return (
    <div className="basket-content">
      <BasketList className="basket-content__products" />
      <PaymentDetails className="basket-pay" />
    </div>
  );
};

export default Basket;

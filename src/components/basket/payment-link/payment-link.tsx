"use client";
import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import { selectors } from "@/store/duck";
import { useAppSelector } from "@/store/hooks";

export const PaymentLink = () => {
  const shoppingList = useAppSelector(selectors.basket.shoppingList);
  return (
    <div>
      {shoppingList.length > 5 && (
        <div className="basket__link-pay">
          <PrimaryButton>
            <a href="#pay">К оформлению</a>
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

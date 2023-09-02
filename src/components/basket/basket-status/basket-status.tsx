import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import Link from "next/link";
import { FC } from "react";
import SuccesIcon from "../../../../public/succes.svg";

import "./style.scss";

type BasketStatusType = {
  mode: "no products" | "succes buy";
  onClick?: () => void;
};

export const BasketStatus: FC<BasketStatusType> = ({ mode, onClick }) => {
  const noProducts = () => {
    return (
      <>
        <h2 className="basket-status__title">В корзине пока пусто</h2>
        <p className="basket-status__descr">
          Загляните на главную, чтобы выбрать товары
        </p>
      </>
    );
  };

  const succesBuy = () => {
    return (
      <>
        <SuccesIcon />
        <h2 className="basket-status__title">Успешная покупка!</h2>
        <p className="basket-status__descr">
          Загляните на главную, возможно там есть новинки!
        </p>
      </>
    );
  };

  return (
    <div className="basket-status">
      {mode === "no products" ? noProducts() : succesBuy()}
      <Link href={"/"}>
        <PrimaryButton className="basket-status__btn" onClick={onClick}>
          На главную
        </PrimaryButton>
      </Link>
    </div>
  );
};

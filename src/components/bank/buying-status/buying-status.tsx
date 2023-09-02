import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import Link from "next/link";
import { FC } from "react";
import FailIcon from "../../../../public/fail.svg";
import SuccesIcon from "../../../../public/succes.svg";
import "./style.scss";

type BuyingStatusType = {
  setComplet: (state: boolean) => void;
  mode: "succes" | "fail";
  text?: string | null;
};

export const BuyingStatus: FC<BuyingStatusType> = ({
  setComplet,
  mode,
  text,
}) => {
  const isSucces = mode === "succes" ? true : false;

  return (
    <div className="succes">
      <h3>{text}</h3>
      {isSucces ? <SuccesIcon /> : <FailIcon />}

      <div className="succes__btn">
        <Link href={"/"}>
          <PrimaryButton>В каталог</PrimaryButton>
        </Link>
        <Link href={"/basket"}>
          <PrimaryButton>В корзину</PrimaryButton>
        </Link>
        <PrimaryButton onClick={() => setComplet(false)}>
          Пополнить еще
        </PrimaryButton>
      </div>
    </div>
  );
};

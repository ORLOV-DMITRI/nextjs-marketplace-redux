import { FC } from "react";
import MinusIcon from "../../../public/minus.svg";
import PlusIcon from "../../../public/plus.svg";
import "./style.scss";
type CountProductsType = {
  className?: string;
};

export const CountProducts: FC<CountProductsType> = ({ className = "" }) => {
  return (
    <div className={`counter ${className}`}>
      <button className="counter__operation">
        <MinusIcon />
      </button>
      <span>5</span>
      <button className="counter__operation">
        <PlusIcon />
      </button>
    </div>
  );
};

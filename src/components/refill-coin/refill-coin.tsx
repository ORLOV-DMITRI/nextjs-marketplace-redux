import { Loader } from "@/assets/ui/loader/loader";
import PrimaryButton from "@/assets/ui/primary-button/primary-button";
import { PrimaryInput } from "@/assets/ui/primary-input/primary-input";
import { checkValue } from "@/shared/utils/checkValue";
import { actions, selectors } from "@/store/duck";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ChangeEvent, FC, useState } from "react";
import { BuyingStatus } from "../buying-status/buying-status";
import "./style.scss";

type RefillDollarType = {
  isComplet: boolean;
  setComplet: (state: boolean) => void;
};

export const RefillCoin: FC<RefillDollarType> = ({ isComplet, setComplet }) => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectors.bank.getBalance);
  const [value, setValue] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const [checkedBalance, setIscheckedBalance] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const checkedValue = checkValue(value);

  const hadleAddDollars = () => {
    if (!checkedValue) return;

    setLoading(true);

    setTimeout(() => {
      if (balance.dollar >= Math.abs(value)) {
        dispatch(actions.bank.setCoin(value));
        setIscheckedBalance(true);
      } else {
        setIscheckedBalance(false);
      }

      setValue(0);
      setLoading(false);
      setComplet(true);
    }, 2000);
  };
  if (loading) {
    return <Loader />;
  }
  if (isComplet) {
    return (
      <BuyingStatus
        mode={!checkedBalance ? "fail" : "succes"}
        text={
          !checkedBalance ? "Не достаточно средств в кошельке $" : "Успешно"
        }
        setComplet={setComplet}
      />
    );
  }
  return (
    <div className="dollar">
      <h4>Валюту Coin можно купить за $</h4>
      <p>
        Укажите желаемое количество Coin, это будет стоить вам{" "}
        {checkedValue && value} $
      </p>
      <PrimaryInput value={value} setValue={handleChange} />
      {checkedValue && (
        <PrimaryButton onClick={hadleAddDollars}>Подтвердить</PrimaryButton>
      )}
    </div>
  );
};

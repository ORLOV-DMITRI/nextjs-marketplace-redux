import { Loader } from "@/assets/ui/loader/loader";
import PrimaryButton from "@/assets/ui/primary-button/primary-button";
import { PrimaryInput } from "@/assets/ui/primary-input/primary-input";
import { checkValue } from "@/shared/utils/checkValue";
import { actions } from "@/store/duck";
import { useAppDispatch } from "@/store/hooks";
import { ChangeEvent, FC, useState } from "react";
import { BuyingStatus } from "../buying-status/buying-status";
import "./style.scss";

type RefillDollarType = {
  isComplet: boolean;
  setComplet: (state: boolean) => void;
};

export const RefillDollar: FC<RefillDollarType> = ({
  isComplet,
  setComplet,
}) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const checkedValue = checkValue(value);

  const hadleAddDollars = () => {
    if (!checkedValue) return;
    setLoading(true);

    setTimeout(() => {
      const amountWithRate = value - value * 0.1;
      dispatch(actions.bank.setDollar(amountWithRate));

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
      <BuyingStatus mode="succes" setComplet={setComplet} text={"Успешно"} />
    );
  }
  return (
    <div className="dollar">
      <h4>Для пополнения кошелька укажите сумму</h4>
      <p>Сумма не больше 100.000 $ </p>
      <span className="commission"> комисcия 10%</span>
      <PrimaryInput value={value} setValue={handleChange} />
      {checkedValue && (
        <PrimaryButton onClick={hadleAddDollars}>Подтвердить</PrimaryButton>
      )}
    </div>
  );
};

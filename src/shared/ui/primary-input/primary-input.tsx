import { ChangeEvent, FC } from "react";
import "./style.scss";

type PrimaryInputType = {
  value: number | null;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PrimaryInput: FC<PrimaryInputType> = ({ value, setValue }) => {
  return (
    <div>
      <input
        type="number"
        step={100}
        className="input"
        defaultValue={""}
        onChange={setValue}
      />
    </div>
  );
};

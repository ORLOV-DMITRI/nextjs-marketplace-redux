import React, { FC } from "react";
import "./style.scss";
type PrimaryButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const PrimaryButton: FC<PrimaryButtonType> = ({
  children,
  onClick,
  className = "",
  disabled,
}) => {
  return (
    <button
      className={`primary-btn ${className} ${disabled && "disabled"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

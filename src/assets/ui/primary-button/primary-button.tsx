import React, { FC } from "react";
import "./style.scss";
type PrimaryButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const PrimaryButton: FC<PrimaryButtonType> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button className={`primary-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;

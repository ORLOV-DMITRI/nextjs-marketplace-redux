import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import Link from "next/link";
import { FC } from "react";
import "./style.scss";

export enum ROUTE {
  home = "/",
  basket = "/basket",
  bank = "/bank",
  favorites = "/favorites",
}

type LinkButtonType = {
  className: string;
  linkPath: string;
  text?: string;
  type: "basket" | "favorites";
  children?: React.ReactNode;
};

export const LinkButton: FC<LinkButtonType> = ({
  className,
  linkPath,
  text,
  type,
  children,
}) => {
  return (
    <PrimaryButton className="link-button__btn">
      <Link href={linkPath} className={`link-button ${className}`}>
        {text} {children}
      </Link>
    </PrimaryButton>
  );
};

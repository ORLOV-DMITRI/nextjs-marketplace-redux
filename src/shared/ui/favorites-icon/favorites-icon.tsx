import { FC } from "react";
import HeartIcon from "../../../../public/heart.svg";
import HeartFillIcon from "../../../../public/heartFill.svg";
import "./style.scss";
type FavoritesIconType = {
  isFavorite: boolean;
  onClick: () => void;
  className: string;
};

export const FavoritesIcon: FC<FavoritesIconType> = ({
  isFavorite,
  onClick,
  className,
}) => {
  return (
    <div onClick={onClick} className={`favorites-icon ${className}`}>
      {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
    </div>
  );
};

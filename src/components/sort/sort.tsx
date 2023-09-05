"use client";
import { actions, selectors } from "@/store/duck";
import { SortListType } from "@/store/duck/sort/slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useState } from "react";
import ArrowDown from "../../../public/chevron-down.svg";
import ArrowUp from "../../../public/chevron-up.svg";
import SortIcon from "../../../public/filter.svg";
import "./style.scss";

type SortType = {
  className: string;
};

export const Sort: FC<SortType> = ({ className }) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sortList = useAppSelector(selectors.sort.sortList);

  const currentSort = useAppSelector(selectors.sort.currentSort);
  console.log(currentSort);

  const handleSelectSort = (sort: SortListType) => {
    dispatch(actions.sort.setCurrentSort(sort));
  };

  return (
    <div className={`sort ${className}`} onClick={() => setIsOpen(!isOpen)}>
      <span className="sort__text">Сортировка:</span>
      <div className={`sort__current ${isOpen ? "current-select" : ""}`}>
        {currentSort}
      </div>
      <div className="sort__icon">
        <SortIcon className={`${isOpen ? "current-select" : ""}`} />
      </div>
      {isOpen ? <ArrowUp /> : <ArrowDown />}
      {isOpen && (
        <div className="sort__list">
          {sortList.map((sort) => (
            <div
              className="sort__item"
              key={sort}
              onClick={() => handleSelectSort(sort)}
            >
              <input
                type="radio"
                checked={currentSort === sort}
                readOnly
                className="sort__radio"
              />
              <span>{sort}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

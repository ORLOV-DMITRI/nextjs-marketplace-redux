"use client";
import "./style.scss";

export const ScrollButton = () => {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button className={"btn-scroll-up"} onClick={handlerScrollUp}>
      &#9650;
    </button>
  );
};

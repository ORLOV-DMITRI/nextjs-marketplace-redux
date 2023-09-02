import PrimaryButton from "@/shared/ui/primary-button/primary-button";
import { Metadata } from "next";
import "./layout.scss";

export const metadata: Metadata = {
  title: "Корзина товаров",
  description: "Корзина товаров",
};

export default function BasketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="basket"
      style={{ scrollBehavior: "smooth", paddingBottom: "100px" }}
    >
      <div className="basket__container">
        <div className="basket__header">
          <h1 className="basket__title">Корзина</h1>
          <div className="basket__link-pay">
            <PrimaryButton>
              <a href="#pay">К оформлению</a>
            </PrimaryButton>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}

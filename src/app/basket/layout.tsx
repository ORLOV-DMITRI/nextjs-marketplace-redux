import { PaymentLink } from "@/components/basket/payment-link/payment-link";
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
          <h1 className="basket__title title">Корзина</h1>
          <PaymentLink />
        </div>

        {children}
      </div>
    </section>
  );
}

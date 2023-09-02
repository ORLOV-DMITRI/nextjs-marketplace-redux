import { AccountBalance } from "@/components/account-balance/account-balance";
import { Metadata } from "next";
import "./layout.scss";

export const metadata: Metadata = {
  title: "Пополнение счета",
  description: "Страница пополнения счета",
};

export default function BankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bank">
      <div className="bank__container">
        <div className="bank__header">
          <h1 className="bank__title">Пополнение баланса</h1>
          <div className="bank__balance">
            <AccountBalance />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

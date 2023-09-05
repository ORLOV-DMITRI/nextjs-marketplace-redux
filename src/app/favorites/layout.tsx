import { Metadata } from "next";
import "./layout.scss";
export const metadata: Metadata = {
  title: "Избранное",
  description: "Избранные товары",
};

export default function BasketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="favorites">
      <div className="favorites__container">
        <div className="favorites__header">
          <h1 className="favorites__title title">Избранное</h1>
        </div>

        {children}
      </div>
    </section>
  );
}

import "./layout.scss";

export default function BasketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="basket">
      <div className="basket__container">
        <h1 className="basket__title">Корзина</h1>
        {children}
      </div>
    </section>
  );
}

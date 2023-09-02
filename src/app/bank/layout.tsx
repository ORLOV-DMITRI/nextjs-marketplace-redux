import "./layout.scss";

export default function BankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bank">
      <div className="bank__container">
        <h1 className="bank__title">Пополнение баланса</h1>
        {children}
      </div>
    </section>
  );
}

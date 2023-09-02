import { RefillBalance } from "@/components/bank/refill-balance/refill-balance";
import "./style.scss";

const Bank = () => {
  return (
    <div className="bank-content">
      <h2 className="bank-content__title">Выберете валюту для пополнения</h2>
      <RefillBalance />
    </div>
  );
};

export default Bank;

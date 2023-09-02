import { RefillBalance } from "@/components/refill-balance/refill-balance";
import "./style.scss";
const Bank = () => {
  return (
    <div className="bank-content">
      <h2>Выберете валюту для пополнения</h2>
      <RefillBalance />
    </div>
  );
};

export default Bank;

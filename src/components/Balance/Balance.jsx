import BalanceModal from "../BalanceModal/BalanceModal";
import { useRef } from "react";
import { useDispatch } from "react-redux";

// REDUX ACTIONS:
import { updateBalance } from "../../redux/user/operations";

// REDUX HOOKS:
import useAuth from "../../hooks/useAuth";

//CSS:
import css from "./Balance.module.css"

const Balance = () => {
  const form = useRef();
  const { userData } = useAuth();
  let userBalance = userData.balance;

  const dispatch = useDispatch();
  let balanceValue;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    balanceValue = evt.target.balance.value;
    dispatch(updateBalance(balanceValue));
    form.current.reset();
  };

  return (
    <div className={css.BalanceContainer}>
      <form className={css.BalanceForm} onSubmit={handleSubmit} ref={form}>
        <label className={css.BalanceLabel}>Balance:</label>
        <div className={css.wrapper}>
          <input className={css.BalanceInput}
            type="number"
            step="0.01"
            name="balance"
            title="Please, enter your balance"
            value={balanceValue}
            placeholder={`${userBalance ? userBalance : "0.00"} USD`}
            required
          />
          <button className={css.BalanceButton} type="submit">CONFIRM</button>
        </div>
      </form>
      {!userBalance && <BalanceModal />}
    </div>
  );
};

export default Balance;

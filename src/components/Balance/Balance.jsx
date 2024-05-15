import {
  BalanceContainer,
  BalanceForm,
  BalanceLabel,
  BalanceInput,
  BalanceButton,
} from "./BalanceStyles";
import BalanceModal from "../BalanceModal/BalanceModal";
import { useRef } from "react";
import { useDispatch } from "react-redux";

// REDUX ACTIONS:
import { updateBalance } from "../../redux/user/operations";

// REDUX HOOKS:
import useAuth from "../../hooks/useAuth";

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
    <BalanceContainer>
      <BalanceForm onSubmit={handleSubmit} ref={form}>
        <BalanceLabel>Balance:</BalanceLabel>
        <BalanceInput
          type="number"
          step="0.01"
          name="balance"
          title="Please, enter your balance"
          value={balanceValue}
          placeholder={`${userBalance ? userBalance : "0.00"} USD`}
          required
        />
        <BalanceButton type="submit">CONFIRM</BalanceButton>
      </BalanceForm>
      {!userBalance && <BalanceModal />}
    </BalanceContainer>
  );
};

export default Balance;

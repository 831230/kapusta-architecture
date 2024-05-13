import {
  BalanceForm,
  BalanceLabel,
  BalanceInput,
  BalanceButton,
} from "./BalanceStyles";
import { useRef } from "react";
import { useDispatch } from "react-redux";

// REDUX ACTIONS:
import { updateBalance } from "../../redux/user/operations";

// REDUX HOOKS:
import useAuth from "../../hooks/useAuth";

const Balance = () => {
  const form = useRef();
  const { userData } = useAuth();
  // console.log(userBalance);
  let UserBalance = userData.balance;
  if (UserBalance === null) {
    UserBalance = 0;
  }
  const dispatch = useDispatch();
  let balanceValue;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    balanceValue = evt.target.balance.value;
    dispatch(updateBalance(balanceValue));
    form.current.reset();
  };

  return (
    <BalanceForm onSubmit={handleSubmit} ref={form}>
      <BalanceLabel>Balance:</BalanceLabel>
      <BalanceInput
        type="number"
        name="balance"
        title="Please, enter your balance"
        value={balanceValue}
        placeholder={`${UserBalance}.00 USD`}
        required
      />
      <BalanceButton type="submit">CONFIRM</BalanceButton>
    </BalanceForm>
  );
};

export default Balance;

import { useState } from "react";
import { useDispatch } from "react-redux";

// REDUX ACTIONS:
import { updateBalance } from "../../redux/user/operations";

const Balance = () => {
  const [balanceValue, setBalanceValue] = useState("");

  const dispatch = useDispatch();

  const setNewBalance = () => dispatch(updateBalance(balanceValue))


  return ( 
    <div>
      <span>Balance</span>
      <input type="number" onChange={(e) => setBalanceValue(e.target.value)} value={balanceValue}/>
      <button type="button" onClick={setNewBalance}>Confirm</button>
    </div>
   );
}
 
export default Balance;
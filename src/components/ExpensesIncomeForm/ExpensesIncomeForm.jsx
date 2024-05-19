import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateDatePicker from "../DatePickerForm/DatePicker";

const ExpensesIncomeForm = ({callback, actionType}) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const sendNewExpenseIncome = () => {
    const data = { date, description, category, amount };
    dispatch(callback(data))
  }
  
  return (
    <form action="">
      <CreateDatePicker onDateChange={setDate} />
      <input type="text" placeholder="Product description" onChange={(e) => setDescription(e.target.value)} value={description}/>
      <input type="text" placeholder="Product category" onChange={(e) => setCategory(e.target.value)} value={category}/>
      <input type="number" placeholder="0,00" onChange={(e) => setAmount(e.target.value)} value={amount}/>
      <button type="button" onClick={sendNewExpenseIncome}>Input</button>
      <button>Clear</button>
    </form>
  );
};

export default ExpensesIncomeForm;

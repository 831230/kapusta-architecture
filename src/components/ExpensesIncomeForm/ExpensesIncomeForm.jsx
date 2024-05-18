import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './ExpensesIncomeForm.module.css';
import calendar from '../../assets/calendar.svg';

const ExpensesIncomeForm = ({ callback, actionType }) => {
  const [date, setDate] = useState(new Date().toLocaleDateString('sv-SE'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [options, setOptions] = useState(['Category 1', 'Category 2', 'Category 3']);

  const dispatch = useDispatch();

  useEffect(() => {
    setDate(new Date().toLocaleDateString('sv-SE'));
  }, []);

  const sendNewExpenseIncome = () => {
    const data = { date, description, category, amount };
    console.log(data);
    dispatch(callback(data));
  };

  return (
    <form className={styles.ExpensesIncomeForm} action="">
      <div className={styles.ExpensesIncomeFormDateContainer}>
        <img className={styles.ExpensesIncomeFormDateIcon} src={calendar} alt="calendar icon" />

        <DatePicker
          selected={new Date(date)}
          onChange={(date) => setDate(date.toLocaleDateString('sv-SE'))}
          dateFormat="yyyy.MM.dd"
          className={styles.ExpensesIncomeFormDateInput}
        />
      </div>

      <div className={styles.ExpensesIncomeFormInputContainer}>
        <input
          className={styles.ExpensesIncomeFormInputDesc}
          type="text"
          placeholder="Product description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <select
          className={styles.ExpensesIncomeFormInputCategory}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">Select category</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          className={styles.ExpensesIncomeFormInputValue}
          type="number"
          placeholder="0,00"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </div>

      <div>
        <button type="button" onClick={sendNewExpenseIncome}>
          Input
        </button>
        <button>Clear</button>
      </div>
    </form>
  );
};

export default ExpensesIncomeForm;

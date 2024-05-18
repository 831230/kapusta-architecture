import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './ExpensesIncomeForm.module.css';
import calendar from '../../assets/calendar.svg';

const ExpensesIncomeForm = ({ callback, actionType }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();
  const dateInputRef = useRef(null);

  useEffect(() => {
    setDate(getTodayDate());
  }, []);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const sendNewExpenseIncome = () => {
    const data = { date, description, category, amount };
    console.log(data);
    dispatch(callback(data));
  };

  const handleCalendarClick = () => {
    dateInputRef.current.showPicker();
  };

  return (
    <form className={styles.ExpensesIncomeForm} action="">
      <div className={styles.ExpensesIncomeFormDateContainer} onClick={handleCalendarClick}>
        <img className={styles.ExpensesIncomeFormDateIcon} src={calendar} alt="calendar icon" />
        <input
          ref={dateInputRef}
          className={styles.ExpensesIncomeFormDateInput}
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
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
        <input
          className={styles.ExpensesIncomeFormInputCategory}
          type="text"
          placeholder="Product category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
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

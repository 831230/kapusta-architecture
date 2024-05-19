import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CreateDatePicker from '../DatePickerForm/DatePicker';
import Select from 'react-select';

import styles from './ExpensesIncomeForm.module.css';

const categoryOptions = [
  { value: 'products', label: 'Products' },
  { value: 'alcohol', label: 'Alcohol' },
];

const ExpensesIncomeForm = ({ callback, actionType, categories }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const sendNewExpenseIncome = () => {
    const data = { date, description, category, amount };
    console.log(data);
    dispatch(callback(data));
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption ? selectedOption.value : '');
  };
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      zIndex: 5,
      height: '50px',
      borderColor: state.isFocused ? '#FF751D' : provided.borderColor,
      '&:hover': {
        borderColor: '#FF751D',
      },
      boxShadow: state.isFocused ? '0 0 0 1px #FF751D' : provided.boxShadow,
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
  };

  return (
    <form className={styles.ExpensesIncomeForm} action="">
      <CreateDatePicker onDateChange={setDate} />

      <div className={styles.ExpensesIncomeFormInputContainer}>
        <input
          className={styles.ExpensesIncomeFormInputDesc}
          type="text"
          placeholder="Product description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Select
          className={styles.ExpensesIncomeFormInputSelectCategory}
          options={categoryOptions}
          onChange={handleCategoryChange}
          value={categoryOptions.find((option) => option.value === category)}
          placeholder="Product Category"
          styles={customSelectStyles}
        />

        <input type="number" placeholder="0,00" onChange={(e) => setAmount(e.target.value)} value={amount} />
      </div>
      <button type="button" onClick={sendNewExpenseIncome}>
        Input
      </button>
      <button>Clear</button>
    </form>
  );
};

export default ExpensesIncomeForm;

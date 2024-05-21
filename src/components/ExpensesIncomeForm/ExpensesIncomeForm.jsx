import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateDatePicker from "../DatePickerForm/DatePicker";

import styles from "./ExpensesIncomeForm.module.css";

import calculator from "../../assets/calculator.svg";

const ExpensesIncomeForm = ({ callback, actionType, categories }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("products");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const categoryOptions = categories
    ? categories
    : [
        { value: "products", label: "Products" },
        { value: "alcohol", label: "Alcohol" },
      ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // if (!date || !description || !category || !amount) {
    //   alert("Please fill out all required fields.");
    //   return;
    // }

    const data = { date, description, category, amount };
    dispatch(callback(data));

    clearFormFields();
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption ? selectedOption.value : "");
  };

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      zIndex: 5,
      height: "50px",
      border: "none",
      borderColor: state.isFocused ? "#000000" : provided.borderColor,
      "&:hover": {
        borderColor: "#000000",
      },
      boxShadow: state.isFocused ? "0 0 0 1px #000000" : provided.boxShadow,
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
  };

  const clearFormFields = () => {
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <form className={styles.ExpensesIncomeForm} onSubmit={handleFormSubmit}>
      <CreateDatePicker onDateChange={setDate} />

      <div className={styles.ExpensesIncomeFormInputContainer}>
        <input
          className={styles.ExpensesIncomeFormInputDesc}
          type="text"
          placeholder="Product description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <select
  className={styles.ExpensesIncomeFormInputSelectCategory}
  value={category}
  onChange={(e) => handleCategoryChange(e.target.value)}
  required
>
  <option value="">Select Category</option>
  {categoryOptions.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
        <div className={styles.ExpensesIncomeFormInputValueContainer}>
          <input
            className={styles.ExpensesIncomeFormInputValue}
            type="number"
            placeholder="0,00"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            min="0"
            required
          />
          <img className={styles.ExpensesIncomeFormInputValueIcon} src={calculator} alt="calculator icon" />
        </div>
      </div>

      <div className={styles.ExpensesIncomeFormButtonContainer}>
        <button className={styles.ExpensesIncomeFormButtonInput} type="submit">
          Input
        </button>
        <button className={styles.ExpensesIncomeFormButtonClear} type="button" onClick={clearFormFields}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default ExpensesIncomeForm;

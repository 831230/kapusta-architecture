import { NavLink } from "react-router-dom";
import css from './ExpensesIncomeNav.module.css'

const ExpensesIncomeNav = () => {
  return (
    <div className={css.navWrapper}>
      <NavLink className={css.income} to="expenses">EXPENSES</NavLink>
      <NavLink className={css.income} to="income">INCOME</NavLink>
    </div>
  );
}

export default ExpensesIncomeNav
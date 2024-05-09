import { NavLink } from "react-router-dom";

const ExpensesIncomeNav = () => {
  return ( 
    <div>
      <NavLink to="expenses">Expenses</NavLink>
      <NavLink to="income">Income</NavLink>
    </div>
   );
}
 
export default ExpensesIncomeNav;
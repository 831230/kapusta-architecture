import { useEffect } from "react";
import { useDispatch } from "react-redux";


// REDUX HOOKS:
import useExpenses from "../../hooks/useExpenses";

// REDUX ACTIONS:
import { getExpenseStats, setNewExpense, deleteExpense } from "../../redux/expenses/operations";

// COMPONENTS:
import ExpensesIncomeForm from "../ExpensesIncomeForm/ExpensesIncomeForm";
import TableExpenses from "../Table/TableExpenses";
import ExpensesIncomeSummary from "../ExpensesIncomeSummary/ExpensesIncomeSummary";
// CSS
import css from "./Expenses.module.css"

const Expenses = () => {
  const { expenses, expensesMonthStats } = useExpenses();
  console.log("Expenses: ",{expenses, expensesMonthStats});

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExpenseStats())
  }, [dispatch])
  return (
    <div className={css.expensesIncomeContainer}>
      <ExpensesIncomeForm callback={setNewExpense} actionType="expense" />
      <div className={css.expensesIncome}>
        <TableExpenses callback={deleteExpense} />
        <ExpensesIncomeSummary expensesMonthStats={expensesMonthStats} />
      </div>
    </div>

  );
}

export default Expenses;
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// REDUX HOOKS:
import useExpenses from "../../hooks/useExpenses";

// REDUX ACTIONS:
import { getExpenseStats, setNewExpense, deleteExpense } from "../../redux/expenses/operations";

// COMPONENTS:
import ExpensesIncomeForm from "../ExpensesIncomeForm/ExpensesIncomeForm";
import ExpensesIncomeTable from "../ExpensesIncomeTable/ExpensesIncomeTable";
import ExpensesIncomeSummary from "../ExpensesIncomeSummary/ExpensesIncomeSummary";

const Expenses = () => {
  const {expenses, expensesMonthStats} = useExpenses();
  // console.log("Expenses: ",{expenses, expensesMonthStats});

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getExpenseStats())
  },[dispatch])
  return ( 
    <>
      <h2>EXPENSES TAB</h2>
      <ExpensesIncomeForm callback={setNewExpense} actionType="expense"/>
      <div className="expenses-income">
        <ExpensesIncomeTable callback={deleteExpense}/>
        <ExpensesIncomeSummary expensesMonthStats={expensesMonthStats}/>
      </div>
      
    </>
   );
}
 
export default Expenses;
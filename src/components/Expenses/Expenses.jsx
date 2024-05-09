import ExpensesIncomeForm from "../ExpensesIncomeForm/ExpensesIncomeForm";
import ExpensesIncomeTable from "../ExpensesIncomeTable/ExpensesIncomeTable";
import ExpensesIncomeSummary from "../ExpensesIncomeSummary/ExpensesIncomeSummary";

const Expenses = () => {
  return ( 
    <>
      <h2>EXPENSES TAB</h2>
      <ExpensesIncomeForm/>
      <div className="expenses-income">
        <ExpensesIncomeTable/>
        <ExpensesIncomeSummary/>
      </div>
      
    </>
   );
}
 
export default Expenses;
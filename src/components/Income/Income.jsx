import ExpensesIncomeForm from "../ExpensesIncomeForm/ExpensesIncomeForm";
import ExpensesIncomeTable from "../ExpensesIncomeTable/ExpensesIncomeTable";
import ExpensesIncomeSummary from "../ExpensesIncomeSummary/ExpensesIncomeSummary";

const Income = () => {
  return ( 
    <div>
      <h2>INCOME TAB</h2>
      <ExpensesIncomeForm/>

      <div className="expenses-income">
        <ExpensesIncomeTable/>
        <ExpensesIncomeSummary/>
      </div>
      
    </div>
   );
}
 
export default Income;
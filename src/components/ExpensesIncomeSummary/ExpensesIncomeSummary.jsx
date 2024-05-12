
// REDUX HOOKS:
import useExpenses from "../../hooks/useExpenses";


const ExpensesIncomeSummary = () => {
  const {expenses, expensesMonthStats} = useExpenses();
  // console.log("ExpensesIncomeSummary:",{expenses, expensesMonthStats});

  return ( 
    <div>
      <h4>Summary</h4>
      <p>January</p>
      <p>February</p>
      <p>March</p>
      <p>April</p>
      <p>...</p>
    </div>
   );
}
 
export default ExpensesIncomeSummary;
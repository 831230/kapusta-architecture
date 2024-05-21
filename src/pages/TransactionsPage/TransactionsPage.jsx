import { Outlet } from "react-router-dom";

// COMPONENTS:
import Balance from "../../components/Balance/Balance";
import ReportsNav from "../../components/ReportsNav/ReportsNav";
import ExpensesIncomeNav from "../../components/ExpensesIncomeNav/ExpensesIncomeNav";

const TransactionsPage = () => {
  return ( 
    <div>
      <div className="expenses-page__header">
        <Balance/>
        <ReportsNav/>
      </div>
      <ExpensesIncomeNav/>
      <Outlet/>
    </div>
   );
} 

export default TransactionsPage; 
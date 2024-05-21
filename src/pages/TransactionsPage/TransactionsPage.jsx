import { Outlet } from "react-router-dom";

// COMPONENTS:
import Balance from "../../components/Balance/Balance";
import ReportsNav from "../../components/ReportsNav/ReportsNav";
import ExpensesIncomeNav from "../../components/ExpensesIncomeNav/ExpensesIncomeNav";

const TransactionsPage = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="expenses-page__header">
          <Balance />
          <ReportsNav />
        </div>
      </div>
      <ExpensesIncomeNav />
      <Outlet />
    </div>
  );
}

export default TransactionsPage;
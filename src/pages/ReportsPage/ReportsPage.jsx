import { Link } from "react-router-dom";

// COMPONENTS:
import Balance from "../../components/Balance/Balance";
import CurrentPeriod from "../../components/CurrentPeriod/CurrentPeriod";
import BalanceLabel from "../../components/BalanceLabel/BalanceLabel";
import ReportsCategoriesNav from "../../components/ReportsCategoriesNav/ReportsCategoriesNav";
import Chart from "../../components/Chart/Chart";

const ReportsPage = () => {
  return ( 
    <>
      <div className="reports-header">
        <Link to="/transactions/expenses">Main page</Link>
        <Balance/>
        <CurrentPeriod/>
      </div>
      <div className="reports-content">
        <BalanceLabel/>
        <ReportsCategoriesNav/>
        <Chart/>
      </div>
    </>
    
   );
}
 
export default ReportsPage;
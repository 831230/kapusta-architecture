import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// REDUX HOOKS:
import useReports from "../../hooks/useReports";

// REDUX ACTIONS:
import { getTransactionsData } from "../../redux/reports/operators";

// COMPONENTS:
import Balance from "../../components/Balance/Balance";
import CurrentPeriod from "../../components/CurrentPeriod/CurrentPeriod";
import BalanceLabel from "../../components/BalanceLabel/BalanceLabel";
import ReportsCategoriesNav from "../../components/ReportsCategoriesNav/ReportsCategoriesNav";
import CategoryList from "../../components/CategoryList/CategoryList";
import BarChart from "../../components/Chart/BarChart";

const ReportsPage = () => {
  const [currentPeriod, setCurrentPeriod] = useState();
  const { incomesReport, expensesReport } = useReports();
  // console.log({ incomesReport, expensesReport });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsData(currentPeriod));
  }, [dispatch, currentPeriod]);
  return (
    <>
      <div className="reports-header">
        <Link to="/transactions/expenses">Main page</Link>
        <Balance />
        <CurrentPeriod currentPeriod={currentPeriod} />
      </div>
      <div className="reports-content">
        <BalanceLabel />
        <ReportsCategoriesNav />
        <div className="category-list">
          <CategoryList />
        </div>
        <BarChart />
      </div>
    </>

  );
}

export default ReportsPage;



// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

// // REDUX HOOKS:
// import useReports from "../../hooks/useReports";

// // REDUX ACTIONS:
// import { getTransactionsData } from "../../redux/reports/operators";

// // COMPONENTS:
// import Balance from "../../components/Balance/Balance";
// import CurrentPeriod from "../../components/CurrentPeriod/CurrentPeriod";
// import BalanceLabel from "../../components/BalanceLabel/BalanceLabel";
// import ReportsCategoriesNav from "../../components/ReportsCategoriesNav/ReportsCategoriesNav";
// import CategoryList from "../../components/CategoryList/CategoryList";
// import Chart from "../../components/Chart/Chart";

// const ReportsPage = () => {
//   const [currentPeriod, setCurrentPeriod] = useState();
//   const { incomesReport, expensesReport } = useReports();
//   // console.log({ incomesReport, expensesReport });
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTransactionsData(currentPeriod));
//   }, [dispatch, currentPeriod]);
//   return ( 
//     <>
//       <div className="reports-header">
//         <Link to="/transactions/expenses">Main page</Link>
//         <Balance/>
//         <CurrentPeriod currentPeriod={currentPeriod}/>
//       </div>
//       <div className="reports-content">
//         <BalanceLabel />
//         <ReportsCategoriesNav/>
//       <div className="category-list">
//         <CategoryList/>
//       </div>
//         <Chart/>
//       </div>
//     </>
    
//    );
// }
 
// export default ReportsPage;
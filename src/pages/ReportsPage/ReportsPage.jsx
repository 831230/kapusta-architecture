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
import ReturnMainpage from "../../components/ReturnMainPage/ReturnMainPage";

const ReportsPage = () => {
  const [currentPeriod, setCurrentPeriod] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });
  const dispatch = useDispatch();

  const [currentView, setCurrentView] = useState("expenses");

  useEffect(() => {
    dispatch(getTransactionsData(currentPeriod));

    console.log(currentPeriod);
  }, [dispatch, currentPeriod]);

  const toggleView = () => {
    setCurrentView(currentView === "expenses" ? "income" : "expenses");
  };

  return (
    <>
      <div className="reports-header">
      <ReturnMainpage />
        {/* <Link to="/transactions/expenses">Main page</Link> */}
        <Balance />
        <CurrentPeriod currentPeriod={currentPeriod} setCurrentPeriod={setCurrentPeriod} />
      </div>
      <div className="reports-content">
        <BalanceLabel />
        <div className="category-section">
          <div className="category-wrapper">
            <ReportsCategoriesNav currentView={currentView} toggleView={toggleView} />
            <CategoryList currentView={currentView} />
          </div>
        </div>
        <BarChart />
      </div>
    </>
  );
};

export default ReportsPage;

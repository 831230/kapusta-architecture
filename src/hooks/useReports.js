import { useSelector } from "react-redux";
import { selectIncomesReport, selectExpensesReport, selectLoading } from "../redux/reports/selectors";

const useReports = () => {
  const incomesReport = useSelector(selectIncomesReport);
  const expensesReport = useSelector(selectExpensesReport);
  const loadingReports = useSelector(selectLoading);

  return {
    incomesReport,
    expensesReport,
    loadingReports
  };
};

export default useReports;
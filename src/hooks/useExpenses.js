import { useSelector } from "react-redux";
import { selectExpenses, selectMonthStats, selectExpensesLoading } from "../redux/expenses/selectors";

const useExpenses = () => {
  const expenses = useSelector(selectExpenses);
  const expensesMonthStats = useSelector(selectMonthStats);
  const expensesLoading = useSelector(selectExpensesLoading);

  return {
    expenses,
    expensesMonthStats,
    expensesLoading
  };
};

export default useExpenses;
import { useSelector } from "react-redux";
import {
  selectIncomes,
  selectMonthStats,
  selectIncomesLoading,
} from "../redux/incomes/selectors";

const useIncomes = () => {
  const incomes = useSelector(selectIncomes);
  const incomesMonthStats = useSelector(selectMonthStats);
  const incomesLoading = useSelector(selectIncomesLoading);
  
  return {
    incomes,
    incomesMonthStats,
    incomesLoading,
  };
};

export default useIncomes;

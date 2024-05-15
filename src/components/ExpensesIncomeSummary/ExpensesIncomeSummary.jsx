// REDUX HOOKS:
import useExpenses from "../../hooks/useExpenses";
import useIncomes from "../../hooks/useIncomes";
import { useLocation } from "react-router-dom";
import { isBefore, parse } from "date-fns";
import {
  SummaryBox,
  SummaryItem,
  SummaryList,
  SummaryTitle,
} from "./Summary.styles";

const ExpensesIncomeSummary = () => {
  const location = useLocation();

  const { expensesMonthStats } = useExpenses();
  const { incomesMonthStats } = useIncomes();

  const route = location.pathname;
  let data;
  let stats;

  if (route === "/transactions/expenses") {
    stats = expensesMonthStats;
  }
  if (route === "/transactions/income") {
    stats = incomesMonthStats;
  }

  const currentDate = new Date();

  if (stats) {
    data = Object.entries(stats)
      .filter(([month]) => {
        const monthDate = parse(month, "MMMM", new Date());
        return isBefore(monthDate, currentDate);
      })
      .map(([month, value]) => ({
        month: month,
        value: value,
      }));
  }

  return (
    <SummaryBox>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryList>
        {data.map((item, index) => (
          <SummaryItem key={index}>
            <div>{item.month}</div>
            <div>{item.value}</div>
          </SummaryItem>
        ))}
      </SummaryList>
    </SummaryBox>
  );
};

export default ExpensesIncomeSummary;

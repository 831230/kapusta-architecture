// REDUX HOOKS:
import useExpenses from "../../hooks/useExpenses";
import useIncomes from "../../hooks/useIncomes";
import { useLocation } from "react-router-dom";
import { isBefore, parse } from "date-fns";
import styles from './ExpensesIncomeSummary.module.css';

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
    <div className={styles.SummaryBox}>
      <div className={styles.SummaryTitle}>Summary</div>
      <ul className={styles.SummaryList}>
        {data.map((item, index) => (
          <li key={index} className={styles.SummaryItem}>
            <div>{item.month}</div>
            <div>{item.value}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpensesIncomeSummary;

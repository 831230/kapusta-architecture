import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTransactionsData } from "../../redux/reports/operators";
import useReports from "../../hooks/useReports";

//CSS
import css from "./BalanceLabel.module.css"

const BalanceLabel = () => {
  const { incomesReport, expensesReport } = useReports();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsData());
  }, [dispatch]);

  return (
    <div className={css.BalanceLabelContainer}>
      <div className={css.BalanceLabelWrapper}>
        <p className={css.BalanceLabelParagraph}>
          Expenses:{" "}
          <span>
            <span className={css.BalanceLabelSpanGreen}>
              - {expensesReport.total}
            </span>{" "}
            <span>USD</span>
          </span>
        </p>
        <div className={css.BalanceLabelSeparator}></div>
        <p className={css.BalanceLabelParagraph}>
          Income:{" "}
          <span>
            <span className={css.BalanceLabelSpanRed}>+ {incomesReport.total}</span>
            <span> USD</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default BalanceLabel;

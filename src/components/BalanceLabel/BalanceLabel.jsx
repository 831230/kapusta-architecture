import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTransactionsData } from "../../redux/reports/operators";
import useReports from "../../hooks/useReports";
import {
  BalanceLabelWrapper,
  BalanceLabelContainer,
  BalanceLabelParagraph,
  BalanceLabelSpanGreen,
  BalanceLabelSpanRed,
  BalanceLabelSeparator,
} from "./BalanceLabelStyles";

const BalanceLabel = () => {
  const { incomesReport, expensesReport } = useReports();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsData());
  }, [dispatch]);

  return (
    <BalanceLabelContainer>
      <BalanceLabelWrapper>
        <BalanceLabelParagraph>
          Expenses:{" "}
          <BalanceLabelSpanGreen>
            - {expensesReport.total}
          </BalanceLabelSpanGreen>{" "}
          USD
        </BalanceLabelParagraph>
        <BalanceLabelSeparator></BalanceLabelSeparator>
        <BalanceLabelParagraph>
          Income:{" "}
          <BalanceLabelSpanRed>+ {incomesReport.total}</BalanceLabelSpanRed> USD
        </BalanceLabelParagraph>
      </BalanceLabelWrapper>
    </BalanceLabelContainer>
  );
};

export default BalanceLabel;

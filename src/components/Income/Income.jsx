import { useEffect } from "react";
import { useDispatch } from "react-redux";

// REDUX HOOKS:
import useIncomes from "../../hooks/useIncomes";

// REDUX ACTIONS:
import {
  getIncomeStats,
  setNewIncome,
  deleteIncome,
} from "../../redux/incomes/operations";

import ExpensesIncomeForm from "../ExpensesIncomeForm/ExpensesIncomeForm";
import TableIncome from "../Table/TableIncome";
import ExpensesIncomeSummary from "../ExpensesIncomeSummary/ExpensesIncomeSummary";

const Income = () => {
  const { incomes, incomesMonthStats } = useIncomes();
  // console.log("Incomes: ", { incomes, incomesMonthStats });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomeStats());
  }, [dispatch]);
  return (
    <div>
      <h2>INCOME TAB</h2>
      <ExpensesIncomeForm callback={setNewIncome} actionType="income" />

      <div className="expenses-income">
        <TableIncome callback={deleteIncome} />
        <ExpensesIncomeSummary incomesMonthStats={incomesMonthStats} />
      </div>
    </div>
  );
};

export default Income;

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// // REDUX HOOKS:
// import useIncomes from "../../hooks/useIncomes";

// // REDUX ACTIONS:
// import {
//   getIncomeStats,
//   setNewIncome,
//   deleteIncome,
// } from "../../redux/incomes/operations";

// import ExpensesIncomeForm from "../ExpensesIncomeForm/ExpensesIncomeForm";
// import ExpensesIncomeTable from "../ExpensesIncomeTable/ExpensesIncomeTable";
// import ExpensesIncomeSummary from "../ExpensesIncomeSummary/ExpensesIncomeSummary";

// const Income = () => {
//   const { incomes, incomesMonthStats } = useIncomes();
//   // console.log("Incomes: ", { incomes, incomesMonthStats });

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getIncomeStats());
//   }, [dispatch]);
//   return (
//     <div>
//       <h2>INCOME TAB</h2>
//       <ExpensesIncomeForm callback={setNewIncome} actionType="income" />

//       <div className="expenses-income">
//         <ExpensesIncomeTable callback={deleteIncome} />
//         <ExpensesIncomeSummary incomesMonthStats={incomesMonthStats} />
//       </div>
//     </div>
//   );
// };

// export default Income;

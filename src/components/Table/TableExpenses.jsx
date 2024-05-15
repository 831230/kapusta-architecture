import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  TransactionBox,
  TableBox,
  TableTitle,
  TableTitleItem,
  TableBodys,
  SumCell,
} from "./Table.styled";
import useAuth from "../../hooks/useAuth";
import useExpenses from "../../hooks/useExpenses";
import useReports from "../../hooks/useReports";
import {
  setNewExpense,
  deleteExpense,
  getExpenseStats,
} from "../../redux/expenses/operations";

function formatNegativeNumber(num) {
  return `- ${num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} UAH.`;
}

function formatDate(dateString) {
  var date = new Date(dateString);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;
}

export default function DenseTable() {
  const { isLoggedIn, loadingUser } = useAuth();
  const { expenses } = useExpenses();
  const { loadingReports } = useReports();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getExpenseStats());
    }
  }, [dispatch, isLoggedIn]);

  const handleDelete = (id) => {
    dispatch(deleteExpense(id))
      .then(() => {})
      .catch((error) => {});
  };

  const handleAdd = () => {
    const newExpenseData = {
      description: "New Expense",
      amount: 100,
      date: new Date(),
      category: "Other",
    };
    dispatch(setNewExpense(newExpenseData));
  };

  return (
    <TransactionBox>
      <TableBox>
        <thead>
          <TableTitle>
            <TableTitleItem>Date</TableTitleItem>
            <TableTitleItem>Description</TableTitleItem>
            <TableTitleItem>Category</TableTitleItem>
            <TableTitleItem>Sum</TableTitleItem>
            <TableTitleItem></TableTitleItem>
          </TableTitle>
        </thead>
        <TableBodys>
          {loadingUser || loadingReports ? (
            <tr>
              <td colSpan={5} align="center">
                Loading...
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{formatDate(expense.date)}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <SumCell>{formatNegativeNumber(expense.amount)}</SumCell>
                <td align="center">
                  <svg
                    width="24"
                    onClick={() => handleDelete(expense._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <use href="./assets/icons_function.svg#icon-Vector-4"></use>
                  </svg>
                </td>
              </tr>
            ))
          )}
        </TableBodys>
      </TableBox>
      <button onClick={handleAdd}>Add</button>
    </TransactionBox>
  );
}

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrashIcon from "../../assets/icons_trash.svg";
import {
  TableBox,
  TableContainerItem,
  TableHeadItem,
  TableBodys,
  SumCell,
  StyledImg,
  TableHead,
  TableContainer,
  TrashButton,
} from "./TableStyles";
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
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
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

  // const handleAdd = () => {
  //   const newExpenseData = {
  //     description: "New Expense",
  //     amount: 100,
  //     date: new Date(),
  //     category: "Other",
  //   };
  //   dispatch(setNewExpense(newExpenseData));
  //  };

  const rows = new Array(9).fill(null);
  const dataRows = [...expenses, ...rows].slice(0, 9);

  return (
    <TableBox>
      <TableHead>
        <TableHeadItem $width="15%">Date</TableHeadItem>
        <TableHeadItem $width="35%">Description</TableHeadItem>
        <TableHeadItem $width="25%">Category</TableHeadItem>
        <TableHeadItem $width="18%">Sum</TableHeadItem>
        <TableHeadItem $width="7%"></TableHeadItem>
      </TableHead>
      <TableBodys>
        {loadingUser || loadingReports ? (
          <TableContainerItem colSpan={5} align="center">
            Loading...
          </TableContainerItem>
        ) : (
          dataRows.map((expense, index) => (
            <TableContainer key={expense ? expense.id : index}>
              <TableContainerItem>
                {expense ? formatDate(expense.date) : ""}
              </TableContainerItem>
              <TableContainerItem $textAlign="left" $paddingLeft="20px">
                {expense ? expense.description : ""}
              </TableContainerItem>
              <TableContainerItem>
                {expense ? expense.category : ""}
              </TableContainerItem>
              <TableContainerItem>
                {expense ? (
                  <SumCell>{formatNegativeNumber(expense.amount)}</SumCell>
                ) : (
                  ""
                )}
              </TableContainerItem>
              <TableContainerItem>
                {expense ? (
                  <TrashButton
                    onClick={() => handleDelete(expense.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <StyledImg src={TrashIcon} alt="Delete" />
                  </TrashButton>
                ) : (
                  ""
                )}
              </TableContainerItem>
            </TableContainer>
          ))
        )}
      </TableBodys>
    </TableBox>
  );
}

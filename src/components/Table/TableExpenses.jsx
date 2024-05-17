import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import trash from '../../assets/icons_function.svg';
import {
  TableBox,
  TableContainerItem,
  TableHeadItem,
  TableBodys,
  SumCell,
  StyledSVG,
  TableHead,
  TableContainer,
  TableHeadItem2,
  TrashButton,
} from "./TableStyles";
import useAuth from "../../hooks/useAuth";
import useExpenses from "../../hooks/useExpenses";
import useReports from "../../hooks/useReports";
import { setNewExpense, deleteExpense, getExpenseStats } from "../../redux/expenses/operations";

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
  return `${day.toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${year}`;
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

  const handleDelete = id => {
    dispatch(deleteExpense(id))
      .then(() => {})
      .catch(error => {});
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

  return (
  
    <TableBox>
    <TableHead>
     
      <TableHeadItem>Date</TableHeadItem>
        <TableHeadItem>Description</TableHeadItem>
        <TableHeadItem>Category</TableHeadItem>
        <TableHeadItem>Sum</TableHeadItem>
        <TableHeadItem2>xxxx</TableHeadItem2>
     
    </TableHead>
    <TableBodys>
          {loadingUser || loadingReports ? (
            <TableContainerItem
            colSpan={5} align="center">Loading...
          </TableContainerItem>
          ) : (
            expenses.map(expense => (
              <TableContainer key={expense.id}>
                <TableContainerItem>{formatDate(expense.date)}</TableContainerItem>
                <TableContainerItem>{expense.description}</TableContainerItem>
                <TableContainerItem>{expense.category}</TableContainerItem>
                <TableContainerItem><SumCell>{formatNegativeNumber(expense.amount)}</SumCell></TableContainerItem>
               
                <TableContainerItem> <TrashButton onClick={handleDelete} style={{ cursor: 'pointer' }}>
      <StyledSVG>
        <use href={trash + 'icon-Vector-4'}></use>
      </StyledSVG>
    </TrashButton></TableContainerItem>
                    
              </TableContainer>
            ))
          )}
        </TableBodys>
      </TableBox>)
}

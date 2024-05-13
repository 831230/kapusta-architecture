import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  selectExpenses,
  setNewExpense,
  selectExpensesLoading,
} from '../../redux/expenses/selectors';
import {
  getExpenseStats,
  deleteExpense,
} from '../../redux/expenses/operations';
import { selectIsLoggedIn, selectLoading } from '../../redux/user/selectors';

function formatNegativeNumber(num) {
  return `- ${num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UAH.`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

export default function TableExpenses() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loadingUser = useSelector(selectLoading);
  const expensesList = useSelector(selectExpenses);
  const loadingExpenses = useSelector(selectExpensesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getExpenseStats());
    }
  }, [dispatch, isLoggedIn]);

  const handleDelete = (id) => {
    dispatch(deleteExpense({ transactionId: id }));
  };

  const handleAdd = () => {
    // Przykładowe użycie setNewExpense - dodanie nowego wydatku
    const newExpenseData = {
      description: 'New Expense',
      amount: 100, // Kwota
      date: new Date(), // Data
      category: 'Other' // Kategoria
    };
    dispatch(setNewExpense(newExpenseData));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ '& th': { fontWeight: 700, textTransform: 'uppercase', backgroundColor: '#F5F6FB' } }}>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(loadingUser || loadingExpenses) ? (
            <TableRow>
              <TableCell colSpan={5} align="center">Loading...</TableCell>
            </TableRow>
          ) : (
            expensesList.map((expense) => (
              <TableRow key={expense._id}>
                <TableCell>{formatDate(expense.date)}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell align="right" style={{ color: '#E7192E', fontWeight: 700 }}>
                  {formatNegativeNumber(expense.amount)}
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete" onClick={() => handleDelete(expense._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <button onClick={handleAdd}>Add</button> {/* Przycisk do dodawania nowego wydatku */}
    </TableContainer>
  );
}
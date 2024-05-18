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
import { selectIncomes, selectIncomesLoading } from '../../redux/incomes/selectors';
import { deleteIncome, getIncomeStats } from '../../redux/incomes/operations';
import { selectIsLoggedIn, selectLoading } from '../../redux/user/selectors';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

function formatPositiveNumber(num) {
  return `${num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UAH.`;
}

export default function IncomeTable() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loadingUser = useSelector(selectLoading);
  const incomesList = useSelector(selectIncomes);
  const loadingIncomes = useSelector(selectIncomesLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getIncomeStats());
    }
  }, [dispatch, isLoggedIn]);

  const handleDelete = (id) => {
    dispatch(deleteIncome({ transactionId: id }));
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
          {(loadingUser || loadingIncomes) ? (
            <TableRow>
              <TableCell colSpan={5} align="center">Loading...</TableCell>
            </TableRow>
          ) : (
            incomesList.map((income) => (
              <TableRow key={income._id}>
                <TableCell>{formatDate(income.date)}</TableCell>
                <TableCell>{income.description}</TableCell>
                <TableCell>{income.category}</TableCell>
                <TableCell align="right" style={{ color: '#407946', fontWeight: 700 }}>
                  {formatPositiveNumber(income.amount)}
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete" onClick={() => handleDelete(income._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
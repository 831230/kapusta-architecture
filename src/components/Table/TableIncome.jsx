import React, { useEffect } from 'react';
import {
    TransactionBox,
    TableBox,
    TableTitle,
    TableTitleItem,
    TableBodys,
    SumCell
  } from './Table.styled';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import useIncomes from '../../hooks/useIncomes';
import useReports from '../../hooks/useReports';
import { setNewIncome, deleteIncome, getIncomeStats } from '../../redux/incomes/operations';


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
    const { isLoggedIn, loadingUser } = useAuth();
    const { incomes, incomesLoading } = useIncomes(); 
    const { loadingReports } = useReports();
    const dispatch = useDispatch();

  

    useEffect(() => {
        if (isLoggedIn) {
          dispatch(getIncomeStats());
        }
      }, [dispatch, isLoggedIn]);
    
      const handleDelete = (id) => {
        dispatch(deleteIncome({ transactionId: id }));
      };
    
      const handleAdd = () => {
        const newIncomeData = {
          description: 'New Income',
          amount: 100, 
          date: new Date(), 
          category: 'Other' 
        };
        dispatch(setNewIncome(newIncomeData)); 
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
              {(loadingUser || incomesLoading || loadingReports) ? (
                <tr>
                  <td colSpan={5} align="center">Loading...</td>
                </tr>
              ) : (
                incomes.map((income) => (
                  <tr key={income._id}>
                    <td>{formatDate(income.date)}</td>
                    <td>{income.description}</td>
                    <td>{income.category}</td>
                    <SumCell isExpense={false}>{formatPositiveNumber(income.amount)}</SumCell>
                    <td align="center">
                    <svg width="24" onClick={() => handleDelete(income._id)} style={{ cursor: 'pointer' }}>
                    <use href="./images/svg/icons_function.svg#icon-Vector-4"></use>
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
import React, { useEffect } from "react";
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
  TrashButton,
  TableHeadItem2,
  
} from "./TableStyles";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import useIncomes from "../../hooks/useIncomes";
import useReports from "../../hooks/useReports";
import { setNewIncome, deleteIncome, getIncomeStats } from "../../redux/incomes/operations";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day.toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${year}`;
}

function formatPositiveNumber(num) {
  return `${num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} UAH.`;
}

export default function IncomeTable() {
  const { isLoggedIn, loadingUser } = useAuth();
  const { incomes, incomesLoading } = useIncomes();
  const { loadingReports } = useReports();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getIncomeStats());
  //   }
  // }, [dispatch, isLoggedIn]);


    useEffect(() => {
        if (isLoggedIn) {
          dispatch(getIncomeStats());
        }
      }, [dispatch, isLoggedIn]);
    
      const handleDelete = (id) => {
        dispatch(deleteIncome(id))
        .then(() => {})
        .catch(error => {});
      };

    
      // const handleAdd = () => {
      //   const newIncomeData = {
      //     description: 'New Income',
      //     amount: 100, 
      //     date: new Date(), 
      //     category: 'Other' 
      //   };
      //   dispatch(setNewIncome(newIncomeData)); 
      // };
      return (
      
          <TableBox>
            <TableHead>
             
              <TableHeadItem>Date</TableHeadItem>
                <TableHeadItem>Description</TableHeadItem>
                <TableHeadItem>Category</TableHeadItem>
                <TableHeadItem>Sum</TableHeadItem>
                <TableHeadItem2 >xxxx</TableHeadItem2>
             
            </TableHead>
            <TableBodys>
              {(loadingUser || incomesLoading || loadingReports)
                ?
                (
                <TableContainerItem
                  colSpan={5} align="center">Loading...
                </TableContainerItem>
                )
                :
                (
                incomes.map((income) => (
                  <TableContainer key={income.id}>
                    <TableContainerItem>{formatDate(income.date)}</TableContainerItem>
                    <TableContainerItem>{income.description}</TableContainerItem>
                    <TableContainerItem>{income.category}</TableContainerItem>
                    <TableContainerItem><SumCell value={income.amount}>{formatPositiveNumber(income.amount)}</SumCell></TableContainerItem>
                    
                    <TableContainerItem> <TrashButton onClick={handleDelete} style={{ cursor: 'pointer' }}>
      <StyledSVG>
        <use href={trash + 'icon-Vector-4'}></use>
      </StyledSVG>
    </TrashButton></TableContainerItem>
                  
              </TableContainer>
            ))
                )
        }
        </TableBodys>
      </TableBox>)
     
    
  
};

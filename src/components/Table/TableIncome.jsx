import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import useIncomes from "../../hooks/useIncomes";
import useReports from "../../hooks/useReports";
import {
  setNewIncome,
  deleteIncome,
  getIncomeStats,
} from "../../redux/incomes/operations";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;
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
      .catch((error) => {});
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

  const rows = new Array(9).fill(null);
  const dataRows = [...incomes, ...rows].slice(0, 9);

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
        {loadingUser || incomesLoading || loadingReports ? (
          <TableContainerItem colSpan={5} align="center">
            Loading...
          </TableContainerItem>
        ) : (
          dataRows.map((income, index) => (
            <TableContainer key={income ? income.id : index}>
              <TableContainerItem>
                {income ? formatDate(income.date) : ""}
              </TableContainerItem>
              <TableContainerItem $textAlign="left" $paddingLeft="20px">
                {income ? income.description : ""}
              </TableContainerItem>
              <TableContainerItem>
                {income ? income.category : ""}
              </TableContainerItem>
              <TableContainerItem>
                {income ? (
                  <SumCell value={income.amount}>
                    {formatPositiveNumber(income.amount)}
                  </SumCell>
                ) : (
                  ""
                )}
              </TableContainerItem>
              <TableContainerItem>
                {income ? (
                  <TrashButton
                    onClick={handleDelete}
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

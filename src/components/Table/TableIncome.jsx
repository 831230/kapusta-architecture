import React, { useEffect } from "react";
import TrashIcon from "../../assets/icons_trash.svg";
import css from "./Table.module.css";
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
    <table className={css.tableBox}>
      <tr className={css.tableHead}>
        <td className={css.tableHeadItem} style={{ width: "15%" }}>
          Date
        </td>
        <td className={css.tableHeadItem} style={{ width: "33%" }}>
          Description
        </td>
        <td className={css.tableHeadItem} style={{ width: "25%" }}>
          Category
        </td>
        <td className={css.tableHeadItem} style={{ width: "20%" }}>
          Sum
        </td>
        <td className={css.tableHeadItem} style={{ width: "7%" }}></td>
      </tr>
      <tbody className={css.tableBodys}>
        {loadingUser || incomesLoading || loadingReports ? (
          <td className={css.tableContainerItem} colSpan={5} align="center">
            Loading...
          </td>
        ) : (
          dataRows.map((income, index) => (
            <tr className={css.tableContainer} key={income ? income.id : index}>
              <td className={css.tableContainerItem} style={{ width: "15%" }}>
                {income ? formatDate(income.date) : ""}
              </td>
              <td
                className={css.tableContainerItem}
                style={{ textAlign: "left" }}
              >
                {income ? income.description : ""}
              </td>
              <td className={css.tableContainerItem}>
                {income ? income.category : ""}
              </td>
              <td className={css.tableContainerItem}>
                {income ? (
                  <span
                    className={css.sumCell}
                    style={{
                      color: income.amount >= 0 ? "#407946" : "#E7192E",
                    }}
                  >
                    {formatPositiveNumber(income.amount)}
                  </span>
                ) : (
                  ""
                )}
              </td>
              <td className={css.tableContainerItem}>
                {income ? (
                  <button
                    className={css.trashButton}
                    onClick={handleDelete}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className={css.trashIcon}
                      src={TrashIcon}
                      alt="Delete"
                    />
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

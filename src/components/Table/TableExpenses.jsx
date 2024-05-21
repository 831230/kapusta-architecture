import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrashIcon from "../../assets/icons_trash.svg";
import css from "./Table.module.css";
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

  const rows = new Array(9).fill(null);
  const dataRows = [...expenses, ...rows].slice(0, 9);

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
        {loadingUser || loadingReports ? (
          <td className={css.tableContainerItem} colSpan={5} align="center">
            Loading...
          </td>
        ) : (
          dataRows.map((expense, index) => (
            <tr
              className={css.tableContainer}
              key={expense ? expense.id : index}
            >
              <td className={css.tableContainerItem}>
                {expense ? formatDate(expense.date) : ""}
              </td>
              <td
                className={css.tableContainerItem}
                style={{ textAlign: "left" }}
              >
                {expense ? expense.description : ""}
              </td>
              <td className={css.tableContainerItem}>
                {expense ? expense.category : ""}
              </td>
              <td className={css.tableContainerItem}>
                {expense ? (
                  <span
                    className={css.sumCell}
                    style={{
                      color: expense.amount >= 0 ? "#E7192E" : "#407946",
                    }}
                  >
                    {formatNegativeNumber(expense.amount)}
                  </span>
                ) : (
                  ""
                )}
              </td>
              <td className={css.tableContainerItem}>
                {expense ? (
                  <button
                    onClick={() => handleDelete(expense.id)}
                    className={css.trashButton}
                  >
                    <img
                      src={TrashIcon}
                      alt="Delete"
                      className={css.trashIcon}
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

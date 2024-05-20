// import useReports from "../../hooks/useReports.js";
// import { useState, useEffect } from "react";

// //CSS
// import css from './CategoryList.module.css'

// const CategoryList = ({ currentView }) => {
//   const [categoryData, setCategoryData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { incomesReport, expensesReport } = useReports();

//   const fetchReportsData = async () => {
//     try {
//       setLoading(true);

//       if (currentView === "expenses") {
//         const expensesData = await expensesReport.expensesData;

//         const categories = Object.keys(expensesData || {});

//         const categoryTotals = categories.map((category) => {
//           let categoryName = category;

//           // Edge cases
//           if (category === "sportsHobbies") {
//             categoryName = "Sports, Hobbies";
//           } else if (category === "communalCommunication") {
//             categoryName = "Communal, Communication";
//           }

//           const total = Object.values(expensesData[category] || {}).reduce((acc, val) => acc + val, 0);

//           return {
//             category: categoryName,
//             total: total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, " "),
//           };
//         });
//         setCategoryData(categoryTotals);
//       } else {
//         const incomesData = await incomesReport.incomesData;

//         const categories = Object.keys(incomesData || {});

//         const categoryTotals = categories.map((category) => ({
//           category,
//           // Format total in this format : "1 000.00"
//           total: incomesData[category].toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, " "),
//         }));
//         setCategoryData(categoryTotals);
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReportsData();
//   }, [currentView, incomesReport, expensesReport]);

//   return (
//     <div className={css.CategoryContainer}>
//       {loading ? (
//         // Placeholder do zamiany na jakis spinner/loader
//         <div>Loading...</div>
//       ) : (
//         categoryData.map((category, index) => (
//           <li className={css.CategoryWrapper} key={index}>
//             <p className={css.CategoryTotalText}>{category.total}</p>
//             <svg className={css.CategoryIcon} width="58" height="56">
//               <rect width="58" height="56" fill="grey" />
//             </svg>
//             <p className={css.CategoryLabel}>{category.category}</p>
//           </li>
//         ))
//       )}
//     </div>
//   );
// };

// export default CategoryList;

import React, { useState, useEffect } from "react";
import useReports from "../../hooks/useReports.js";
import css from "./CategoryList.module.css";
import iconMapper from "../../components/utils/iconMapper";

const CategoryList = ({ currentView }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { incomesReport, expensesReport } = useReports();

  const fetchReportsData = async () => {
    try {
      setLoading(true);

      if (currentView === "expenses") {
        const expensesData = await expensesReport.expensesData;

        const categories = Object.keys(expensesData || {});

        const categoryTotals = categories.map((category) => {
          let categoryName = category;

          // Edge cases
          if (category === "sportsHobbies") {
            categoryName = "Sports, Hobbies";
          } else if (category === "communalCommunication") {
            categoryName = "Communal, Communication";
          }

          const total = Object.values(expensesData[category] || {}).reduce(
            (acc, val) => acc + val,
            0
          );

          return {
            category: categoryName,
            total: total
              .toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
              .replace(/,/g, " "),
            icon: iconMapper[category] || iconMapper.other, // Domyślna ikona, jeśli kategoria nie ma przypisanej ikony
          };
        });
        setCategoryData(categoryTotals);
      } else {
        const incomesData = await incomesReport.incomesData;

        const categories = Object.keys(incomesData || {});

        const categoryTotals = categories.map((category) => ({
          category,
          total: incomesData[category]
            .toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
            .replace(/,/g, " "),
          icon: iconMapper[category] || iconMapper.addIncome, // Domyślna ikona dla przychodów
        }));
        setCategoryData(categoryTotals);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReportsData();
  }, [currentView, incomesReport, expensesReport]);

  return (
    <div className={css.CategoryContainer}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        categoryData.map((category, index) => (
          <li className={css.CategoryWrapper} key={index}>
            <p className={css.CategoryTotalText}>{category.total}</p>
            <div className={css.CategoryIcon}>{category.icon}</div>
            <p className={css.CategoryLabel}>{category.category}</p>
          </li>
        ))
      )}
    </div>
  );
};

export default CategoryList;

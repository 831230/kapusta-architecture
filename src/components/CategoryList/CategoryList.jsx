import useReports from "../../hooks/useReports.js";
import { useState, useEffect } from "react";

import { CategoryContainer, CategoryWrapper, CategoryTotalText, CategoryIcon, CategoryLabel } from "./CategoryListStyles";

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

          const total = Object.values(expensesData[category] || {}).reduce((acc, val) => acc + val, 0);

          return {
            category: categoryName,
            total: total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, " "),
          };
        });
        setCategoryData(categoryTotals);
      } else {
        const incomesData = await incomesReport.incomesData;

        const categories = Object.keys(incomesData || {});

        const categoryTotals = categories.map((category) => ({
          category,
          // Format total in this format : "1 000.00"
          total: incomesData[category].toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, " "),
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
    <CategoryContainer>
      {loading ? (
        // Placeholder do zamiany na jakis spinner/loader
        <div>Loading...</div>
      ) : (
        categoryData.map((category, index) => (
          <CategoryWrapper key={index}>
            <CategoryTotalText>{category.total}</CategoryTotalText>
            <CategoryIcon src="https://placehold.co/58x56" alt="Products-img" />
            <CategoryLabel>{category.category}</CategoryLabel>
          </CategoryWrapper>
        ))
      )}
    </CategoryContainer>
  );
};

export default CategoryList;

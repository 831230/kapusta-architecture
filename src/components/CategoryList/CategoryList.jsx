import { useDispatch } from "react-redux";
import { getTransactionsData } from "../../redux/reports/operators";
import { useState, useEffect } from "react";

import { CategoryContainer, CategoryWrapper, CategoryTotalText, CategoryIcon, CategoryLabel } from "./CategoryListStyles";

const CategoryList = ({ currentView }) => {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([]);

  const fetchReportsData = async (data) => {
    // Placeholder data
    data = "2024-05";

    const transactionsData = await dispatch(getTransactionsData(data));

    if (currentView === "expenses") {
      const expensesData = transactionsData.payload.expenses.expensesData;
      const categories = Object.keys(expensesData);

      const categoryTotals = categories.map((category) => {
        let categoryName = category;

        // Edge cases
        if (category === "sportsHobbies") {
          categoryName = "Sports, Hobbies";
        } else if (category === "communalCommunication") {
          categoryName = "Communal, Communication";
        }

        const total = Object.values(expensesData[category]).reduce((acc, val) => acc + val, 0);

        return {
          category: categoryName,
          total: total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, " "),
        };
      });
      setCategoryData(categoryTotals);
    } else {
      const incomesData = transactionsData.payload.incomes.incomesData;
      const categories = Object.keys(incomesData);

      const categoryTotals = categories.map((category) => ({
        category,

        // Format total in this format : "1 000.00"
        total: incomesData[category].toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, " "),
      }));
      setCategoryData(categoryTotals);
    }
  };

  useEffect(() => {
    fetchReportsData();
  }, [currentView, dispatch]);

  return (
    <CategoryContainer>
      {categoryData.map((category, index) => (
        <CategoryWrapper key={index}>
          <CategoryTotalText>{category.total}</CategoryTotalText>
          <CategoryIcon src="https://placehold.co/58x56" alt="Products-img" />
          <CategoryLabel>{category.category}</CategoryLabel>
        </CategoryWrapper>
      ))}
    </CategoryContainer>
  );
};

export default CategoryList;

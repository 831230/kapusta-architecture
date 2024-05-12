export const user = {
  token: "secret-token-mada-faka",
  email: "zenio@mail.com",
  balance: 5000,
  firstLogin: true,
}

export const loginResponse = {
  accessToken: "secret-token-mada-faka",
  refreshToken: "refresh-secret-token-mada-faka",
  userData: {
    id: "507f1f77bcf86cd799439012",
    email: "zenio@mail.com",
    balance: 5000,
    firstLogin: true,
    transactions: [
      {
        id: "507f1f77bcf86cd799439013",
        description: "Transaction's description",
        category: "Alcochol",
        amount: 500,
        date: "2024-05-25",
      },
      {
        id: "507f1f77bcf86cd799439014",
        description: "Transaction's description 2",
        category: "Products",
        amount: 50,
        date: "2024-05-26",
      }
    ]
  }
};
 

export const expenseStats = {
  userExpenses: [
    {
      id: "507f1f77bcf86cd799439013",
      description: "Transaction's description",
      category: "Alcochol",
      amount: 500,
      date: "2024-05-25",
    },
    {
      id: "507f1f77bcf86cd799439014",
      description: "Transaction's description 2",
      category: "Products",
      amount: 50,
      date: "2024-05-26",
    }
  ],
  monthStats: {
    January: "150",
    February: "",
    March: "250",
    April: "500",
    May: "7500",
    June: "",
    July: "600",
    September: "",
    October: "5000",
    November: "200",
    December: "",
  }
};

export const newExpense = {
  newBalance: 9800,
  transaction: {
    id: "507f1f77bcf86cd799439015",
    description: "Transaction's description 3",
    category: "Products",
    amount: 200,
    date: "2024-05-28",
  }
}

export const getNewBalance = {newBalance: 10000};

export const removeExpense = {newBalance: 8500};

export const incomeStats = {
  userIncomes: [
    {
      id: "507f1f77bcf86cd799439011",
      description: "Transaction's description",
      category: "Salary",
      amount: 500,
      date: "2024-05-17",
    },
    {
      id: "507f1f77bcf86cd799439012",
      description: "Transaction's description 2",
      category: "Salary",
      amount: 800,
      date: "2024-05-18",
    }
  ],
  monthStats: {
    January: "2500",
    February: "",
    March: "4500",
    April: "2800",
    May: "7200",
    June: "3500",
    July: "",
    September: "",
    October: "8700",
    November: "4900",
    December: "",
  }
};

export const newIncome = {
  newBalance: 10650,
  transaction: {
    id: "507f1f77bcf86cd799439055",
    description: "Transaction's description 3",
    category: "Salary",
    amount: 3500,
    date: "2024-05-19",
  }
};

export const transactionsData = {
  incomes: {
    total: 6000,
    incomesData: {
      salary: 5000,
      bonus: 1000
    }
  },
  expenses: {
    total: 5200,
    expensesData: {
      products: {
        total: 2000,
        dinner: 700,
        something: 1300
      },
      alcohol: {
        total: 3200,
        drinks: 2200,
        beer: 1000
      }
    }
  }
}

export const removeIncome = {newBalance: 7300};
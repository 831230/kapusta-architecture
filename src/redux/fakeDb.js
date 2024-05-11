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
}
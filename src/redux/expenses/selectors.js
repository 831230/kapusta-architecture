const selectExpenses = (state) => state.expenses.userExpenses;
const selectMonthStats = (state) => state.expenses.monthStats;
const selectExpensesLoading = (state) => state.expenses.loadingExpenses;

export {selectExpenses, selectMonthStats, selectExpensesLoading}
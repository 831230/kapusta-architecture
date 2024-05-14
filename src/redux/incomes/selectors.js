const selectIncomes = (state) => state.incomes.userIncomes;
const selectMonthStats = (state) => state.incomes.monthStats;
const selectIncomesLoading = (state) => state.incomes.loadingIncomes;

export {selectIncomes, selectMonthStats, selectIncomesLoading}
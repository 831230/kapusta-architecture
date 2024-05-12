const selectIncomesReport = (state) => state.reports.incomes;
const selectExpensesReport = (state) => state.reports.expenses;
const selectLoading = (state) => state.reports.loadingReports;


export {selectIncomesReport, selectExpensesReport, selectLoading} 
const selectIsLoggedIn = (state) => state.user.isLoggedIn;
const selectUserData = (state) => state.user.userData;
const selectLoading = (state) => state.user.loading;

export {selectIsLoggedIn, selectUserData, selectLoading} 
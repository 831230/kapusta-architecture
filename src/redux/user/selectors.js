const selectIsLoggedIn = (state) => state.user.isLoggedIn;
const selectUserData = (state) => state.user.userData;
const selectLoading = (state) => state.user.loadingUser;

export {selectIsLoggedIn, selectUserData, selectLoading} 
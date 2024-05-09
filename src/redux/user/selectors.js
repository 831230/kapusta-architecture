const selectIsLoggedIn = (state) => state.user.isLoggedIn;
const selectUserData = (state) => state.user.user;

export {selectIsLoggedIn, selectUserData}
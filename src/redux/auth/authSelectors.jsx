// import { useSelector } from "react-redux";

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserEmail = state => state.auth.user.email;
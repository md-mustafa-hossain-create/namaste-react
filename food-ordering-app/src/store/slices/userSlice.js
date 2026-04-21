import { createSlice } from "@reduxjs/toolkit";

/**
 * USER SLICE
 * This slice manages the global authentication state of our application.
 * It stores whether a user is logged in and their basic profile information.
 */
const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    userInfo: null,
  },
  reducers: {
    // This action is called when a user logs in (or if they were already logged in)
    logIn: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload; // payload contains { uid, email, name }
    },
    // This action is called when a user logs out
    logOut: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
});

// We export the actions so we can use them in App.jsx and Header.jsx
export const { logIn, logOut } = userSlice.actions;

// We export the reducer so the appStore can use it
export default userSlice.reducer;

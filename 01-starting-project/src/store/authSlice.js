import { createSlice } from '@reduxjs/toolkit';

const initialAuthenticationState = { isAuthenticated: false };

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthenticationState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authenticationSlice.actions;

export default authenticationSlice.reducer;

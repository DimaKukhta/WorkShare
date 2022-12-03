import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { StoreBranches } from '../../constants';
import { RootState } from '../../store';

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: StoreBranches.Auth,
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem('loggedInData', '{ isLoggedIn: true }');
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem('loggedInData', '{ isLoggedIn: false }');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (typeof window !== 'undefined') {
        const storedLoggedInData = localStorage.getItem('loggedInData');
        if (storedLoggedInData != null && storedLoggedInData) {
          const parsedJson = JSON.parse(storedLoggedInData);
          state.isLoggedIn = parsedJson.isLoggedIn ?? false;
        } else {
          state.isLoggedIn = false;
        }
      }
    });
  },
});

export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

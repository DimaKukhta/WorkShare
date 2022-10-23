import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authSlice } from './reducers/auth/authSlice';
import { createWrapper } from 'next-redux-wrapper';

const store = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
  });

type Store = ReturnType<typeof store>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper(store, { debug: true });

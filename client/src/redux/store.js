import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters/reducer';
import usersReducer from './users/reducer';


export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    users: usersReducer
  },
  devTools: true
});
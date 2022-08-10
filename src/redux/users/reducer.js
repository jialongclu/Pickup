import { createSlice } from '@reduxjs/toolkit';
import { getUsersAsync, updateUserAsync, signInAsync } from './thunks';

const REQUEST_STATE = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};

const INITIAL_STATE = {
  list: [],
  getUsersAsync: REQUEST_STATE.IDLE,
  signInAsync: REQUEST_STATE.IDLE,
  updateUserAsync: REQUEST_STATE.IDLE,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    logout: (state, action) => {
      state.users.user = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.getUsersAsync = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.getUsersAsync = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.getUsersAsync = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(signInAsync.pending, (state) => {
        state.signInAsync = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.signInAsync = REQUEST_STATE.FULFILLED;
        window.localStorage.setItem('email', action.payload.email);
        window.localStorage.setItem('id', action.payload._id);
        state.user = { ...action.payload, id: action.payload._id };
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.signInAsync = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.updateUserAsync = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.updateUserAsync = REQUEST_STATE.FULFILLED;
        state.user = { ...action.payload, id: action.payload._id };
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.updateUserAsync = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
  }
});

export default usersSlice.reducer;
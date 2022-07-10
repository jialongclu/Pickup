import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UsersService from './service';

export const getUsersAsync = createAsyncThunk(
  actionTypes.GET_USERS,
  async () => {
    return await UsersService.getUsers();
  }
);

export const getUserAsync = createAsyncThunk(
  actionTypes.GET_USER,
  async (id) => {
    return await UsersService.getUser(id);
  }
);
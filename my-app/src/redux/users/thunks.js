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

export const updateUserAsync = createAsyncThunk(
  actionTypes.UPDATE_USER,
  async ({id, updatedFields}) => {
    return await UsersService.updateUser({id, updatedFields});
  }
);

export const signInAsync = createAsyncThunk(
  actionTypes.SIGN_IN,
  async ({email, password}) => {
    return await UsersService.signIn({email, password});
  }
);
import { createSlice } from '@reduxjs/toolkit';

const MOCK_USERS = [
  {
    firstName: 'Shubh',
    lastName: 'Mittal',
    skillLevel: 'Intermediate',
    age: 21,
    height: '180cm',
    gender: 'Male'
  },
  {
    firstName: 'Jialong',
    lastName: 'Lu',
    skillLevel: 'Beginner',
    age: 22,
    height: '177cm',
    gender: 'Male'
  },
  {
    firstName: 'Lebron',
    lastName: 'James',
    skillLevel: 'Advanced',
    age: 40,
    height: '190cm',
    gender: 'Male'
  }
]
const INITIAL_STATE = {
    list: MOCK_USERS
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
  }
});

export const { removeUser } = usersSlice.actions;
export default usersSlice.reducer;
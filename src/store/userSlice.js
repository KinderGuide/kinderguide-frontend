import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
  },
  reducers: {
    getUser(state, action) {},
    updateUser(state, action) {},
  },
});

export const { getUser, updateUser } = userSlice.actions;

export default userSlice.reducer;

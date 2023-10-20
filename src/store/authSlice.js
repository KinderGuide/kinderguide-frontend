import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type actionPayloadSetUser = {
  type: string;
  payload: {
    email: null | string;
    token: null | string;
    uid: null | string;
  };
};

export type initialStateType = {
  email: null | string;
  token: null | string;
  uid: null | string;
};

const initialState = {
  email: null,
  token: null,
  uid: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: initialStateType, action: actionPayloadSetUser) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.uid = action.payload.uid;
    },
    removeUser(state) {
      // localStorage.removeItem(state.uid ? state.uid : "");
      state.email = null;
      state.token = null;
      state.uid = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

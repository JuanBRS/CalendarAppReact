import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //" authenicated", "not- authenticated",
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    Onchecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },

    OnLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },

    onLogout: (state, { payload }) => {
      state.status = "not-autenticated";
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});
export const { Onchecking, OnLogin, onLogout, clearErrorMessage } =
  authSlice.actions;

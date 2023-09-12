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

    Onlogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
  },
});
export const { Onchecking, Onlogin } = authSlice.actions;

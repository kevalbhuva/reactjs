import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";

const initialState = {
  value: 0,
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userApi.fulfilled, (state, action) => {
        state.status = "successful";
        state.userData = action.payload;
      }).addCase(userApi.rejected, (state, action) => {
         state.status = 'failed';
         state.error = action.error.message;
      }) 
  },
});

export default userSlice.reducer;

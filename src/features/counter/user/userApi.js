import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userApi = createAsyncThunk("user/userApi", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const fetchUsers = (token) => async (dispatch) => {
  dispatch({ type: "users/fetchPending" });
  try {
    const response = await axios.get("https://dummyjson.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "users/fetchFulfilled", payload: response.data.users });
  } catch (error) {
    dispatch({ type: "users/fetchRejected", error: error.message });
  }
};

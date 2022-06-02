import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response = await axios.get("http://localhost:8080/users/all");
    return response.data;
  }
);

const initialState = {
  listUsers: [],
  isLoading: false,
  isError: false,
};

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: "counter",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;

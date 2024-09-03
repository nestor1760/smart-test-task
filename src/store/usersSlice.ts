import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TUser, UsersState } from "../types/types";


const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: undefined,
}

export const fetchUsers = createAsyncThunk<TUser[]>(
  'users/fetchUsers',
  async () => {
    const url = new URL(`https://jsonplaceholder.typicode.com/users`)

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: TUser[] = await response.json()

      return data

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Fetch error: ${error.message}`);
      } else {
        throw new Error('Unexpected error occurred');
      }
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || 'Unknown error occurred'
    })
  },
});

export default usersSlice.reducer;
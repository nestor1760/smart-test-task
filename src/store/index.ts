import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import formSlice from "./formSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    form: formSlice
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
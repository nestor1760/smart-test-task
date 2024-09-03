import { createSlice } from '@reduxjs/toolkit';
import { TForm } from '../types/types';

const initialState: TForm = {
  inputValue: ''
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = formSlice.actions;
export default formSlice.reducer;
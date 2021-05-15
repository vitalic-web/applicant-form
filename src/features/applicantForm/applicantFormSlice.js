import { createSlice } from '@reduxjs/toolkit';

export const applicantFormSlice = createSlice({
  name: 'applicantForm',
  initialState: {
    name: '',
    surname: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
  },
});

export const { setName, setSurname } = applicantFormSlice.actions;

export default applicantFormSlice.reducer;

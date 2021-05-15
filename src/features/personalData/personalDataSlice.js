import { createSlice } from '@reduxjs/toolkit';

export const personalDataSlice = createSlice({
  name: 'personalData',
  initialState: {
    name: '',
    surname: '',
    email: ''
  },
  reducers: {
    setInputData: (state, action) => {
      const { nameTest, data } = action.payload;
      state[nameTest] = data;
    }
  },
});

export const { setInputData } = personalDataSlice.actions;

export const selectPersonalData = state => state.personalData;
export default personalDataSlice.reducer;

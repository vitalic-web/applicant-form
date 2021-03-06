import { createSlice } from '@reduxjs/toolkit';

export const genderDataSlice = createSlice({
  name: 'genderData',
  initialState: {
    isMale: false,
    isFemale: false,
    activeInput: ''
  },
  reducers: {
    setGender: (state, action) => {
      if (action.payload === 'male') {
        state.isMale = true;
        state.isFemale = false;
      } else {
        state.isMale = false;
        state.isFemale = true;
      }
    },
    setActiveInput: (state, action) => {
      state.activeInput = action.payload;
    },
    setNotCheckedGender: (state) => {
      state.isMale = false;
      state.isFemale = false;
      state.activeInput = '';
    }
  },
});

export const { setGender, setActiveInput, setNotCheckedGender } = genderDataSlice.actions;

export const selectGenderData = state => state.genderData;
export default genderDataSlice.reducer;

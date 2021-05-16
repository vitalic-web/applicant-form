import { createSlice } from '@reduxjs/toolkit';

export const genderDataSlice = createSlice({
  name: 'genderData',
  initialState: {
    isMale: false,
    isFemale: false
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
    }
  },
});

export const { setGender } = genderDataSlice.actions;

export const selectGenderData = state => state.genderData;
export default genderDataSlice.reducer;

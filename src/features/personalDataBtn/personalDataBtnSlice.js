import { createSlice } from '@reduxjs/toolkit';

export const personalDataBtnSlice = createSlice({
  name: 'personalDataBtn',
  initialState: {
    isFileUploaded: false,
  },
  reducers: {
    setUserFile: (state, action) => {
      state.isFileUploaded = action.payload;
    }
  },
});

export const { setUserFile } = personalDataBtnSlice.actions;

export const selectPersonalDataBtn = state => state.personalDataBtn;
export default personalDataBtnSlice.reducer;

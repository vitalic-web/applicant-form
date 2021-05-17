import { createSlice } from '@reduxjs/toolkit';

export const addFileBtnSlice = createSlice({
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

export const { setUserFile } = addFileBtnSlice.actions;

export const selectAddFileBtn = state => state.addFileBtn;
export default addFileBtnSlice.reducer;

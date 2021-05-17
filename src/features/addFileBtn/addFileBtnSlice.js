import { createSlice } from '@reduxjs/toolkit';

export const addFileBtnSlice = createSlice({
  name: 'personalDataBtn',
  initialState: {
    isFileUploaded: false,
    fileUploadedValidity: true
  },
  reducers: {
    setUserFile: (state, action) => {
      state.isFileUploaded = action.payload;
    },
    setFileUploadedValidity: (state, action) => {
      state.fileUploadedValidity = action.payload;
    }
  },
});

export const { setUserFile, setFileUploadedValidity } = addFileBtnSlice.actions;

export const selectAddFileBtn = state => state.addFileBtn;
export default addFileBtnSlice.reducer;

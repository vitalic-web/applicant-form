import { createSlice } from '@reduxjs/toolkit';

export const privacyCheckboxSlice = createSlice({
  name: 'privacyCheckbox',
  initialState: {
    isAcceptPrivacy: false
  },
  reducers: {
    setIsAcceptPrivacy: (state) => {
      state.isAcceptPrivacy = !state.isAcceptPrivacy;
    },
    checkPrivacy: (state) => {
      state.isAcceptPrivacy = true;
    }
  },
});

export const { setIsAcceptPrivacy, checkPrivacy } = privacyCheckboxSlice.actions;

export const selectPrivacyCheckbox = state => state.privacyCheckbox;
export default privacyCheckboxSlice.reducer;

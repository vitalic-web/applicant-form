import { createSlice } from '@reduxjs/toolkit';

export const privacyCheckboxSlice = createSlice({
  name: 'privacyCheckbox',
  initialState: {
    isAcceptPrivacy: false
  },
  reducers: {
    setIsAcceptPrivacy: (state) => {
      state.isAcceptPrivacy = !state.isAcceptPrivacy;
    }
  },
});

export const { setIsAcceptPrivacy } = privacyCheckboxSlice.actions;

export const selectPrivacyCheckbox = state => state.privacyCheckbox;
export default privacyCheckboxSlice.reducer;

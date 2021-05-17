import { createSlice } from '@reduxjs/toolkit';

export const personalDataFieldSlice = createSlice({
  name: 'personalDataField',
  initialState: {
    name: '',
    surname: '',
    email: '',
    git: '',
    nameValidity: true,
    surnameValidity: true,
    emailValidity: true,
    gitValidity: true
  },
  reducers: {
    setInputData: (state, action) => {
      const { name, data } = action.payload;
      state[name] = data;
    },

    setValidity: (state, action) => {
      const { name, validity } = action.payload;
      state[`${name}Validity`] = validity;
    }
  },
});

export const { setInputData, setValidity } = personalDataFieldSlice.actions;

export const selectPersonalDataField = state => state.personalDataField;
export default personalDataFieldSlice.reducer;

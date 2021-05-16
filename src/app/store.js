import { configureStore } from '@reduxjs/toolkit';
import personalDataReducer from '../features/personalData/personalDataSlice';
import personalDataBtnReducer from '../features/personalDataBtn/personalDataBtnSlice';
import genderDataReducer from '../features/genderData/genderDataSlice';
import githubDataReducer from '../features/githubData/githubDataSlice';
import privacyCheckboxReducer from '../features/privacyCheckbox/privacyCheckboxSlice';

export default configureStore({
  reducer: {
    personalData: personalDataReducer,
    personalDataBtn: personalDataBtnReducer,
    genderData: genderDataReducer,
    githubData: githubDataReducer,
    privacyCheckbox: privacyCheckboxReducer,
  },
});

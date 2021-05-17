import { configureStore } from '@reduxjs/toolkit';
import personalDataFieldReducer from '../features/personalDataField/personalDataFieldSlice';
import personalDataBtnReducer from '../features/personalDataBtn/personalDataBtnSlice';
import genderDataReducer from '../features/genderData/genderDataSlice';
import privacyCheckboxReducer from '../features/privacyCheckbox/privacyCheckboxSlice';

export default configureStore({
  reducer: {
    personalDataField: personalDataFieldReducer,
    personalDataBtn: personalDataBtnReducer,
    genderData: genderDataReducer,
    privacyCheckbox: privacyCheckboxReducer,
  },
});

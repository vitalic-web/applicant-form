import { configureStore } from '@reduxjs/toolkit';
import personalDataFieldReducer from '../features/personalDataField/personalDataFieldSlice';
import addFileBtnReducer from '../features/addFileBtn/addFileBtnSlice';
import genderDataReducer from '../features/genderData/genderDataSlice';
import privacyCheckboxReducer from '../features/privacyCheckbox/privacyCheckboxSlice';

export default configureStore({
  reducer: {
    personalDataField: personalDataFieldReducer,
    addFileBtn: addFileBtnReducer,
    genderData: genderDataReducer,
    privacyCheckbox: privacyCheckboxReducer,
  },
});

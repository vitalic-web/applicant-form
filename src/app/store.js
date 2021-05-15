import { configureStore } from '@reduxjs/toolkit';
import applicantFormReducer from '../features/applicantForm/applicantFormSlice';
import personalDataReducer from '../features/personalData/personalDataSlice';

export default configureStore({
  reducer: {
    applicantForm: applicantFormReducer,
    personalData: personalDataReducer,
  },
});

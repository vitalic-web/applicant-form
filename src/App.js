import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { applicantForm } from './utils/constants';
import SubTitle from './commonComponents/SubTitle/SubTitle';
import PersonalDataField from './features/personalDataField/PersonalDataField';
import AddFileBtn from './features/addFileBtn/AddFileBtn';
import GenderData from './features/genderData/GenderData';
import PrivacyCheckbox from './features/privacyCheckbox/PrivacyCheckbox';
import Popup from './commonComponents/Popup/Popup';

function App() {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const formData = useSelector(state => state);
  const [isActivePopup, setIsActivePopup] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();
    setIsActivePopup(true);
    console.log('submit');
  };

  const submitButtonStyle = `SubmitButton ${isFormComplete ? 'SubmitButton_active' : ''}`;

  useEffect(() => {
    const isPersonalDataComplete = Boolean(
      (formData.personalDataField.name && formData.personalDataField.nameValidity) &&
      (formData.personalDataField.surname && formData.personalDataField.surnameValidity) &&
      (formData.personalDataField.email && formData.personalDataField.emailValidity) &&
      (formData.personalDataField.git && formData.personalDataField.gitValidity));
    const isFileUploaded = formData.addFileBtn.isFileUploaded && formData.addFileBtn.fileUploadedValidity;
    const isGenderChecked = formData.genderData.isFemale || formData.genderData.isMale;
    const isAcceptPrivacy = formData.privacyCheckbox.isAcceptPrivacy;
    const isFormValidation = Boolean(isPersonalDataComplete && isFileUploaded && isGenderChecked && isAcceptPrivacy);

    setIsFormComplete(isFormValidation);
  }, [formData]);

  return (
    <form className="App" onSubmit={handleSubmit}>
      <Popup
        userName={formData.personalDataField.name}
        isActivePopup={isActivePopup}
        setIsActivePopup={setIsActivePopup}
      />
      <h1 className="Title">{applicantForm.title}</h1>
      <div className="PersonalData">
        <SubTitle name={applicantForm.personalData.name} />
        {applicantForm.personalData.inputs.map((input, index) =>
          <PersonalDataField
            key={index}
            name={input.name}
            id={input.id}
            type={input.type}
          />
        )}
        <AddFileBtn />
      </div>
      <GenderData />
      <SubTitle name={applicantForm.github.name} />
      <PersonalDataField
        name={applicantForm.github.input.name}
        id={applicantForm.github.input.id}
        type={applicantForm.github.input.type}
        github={true}
      />
      <PrivacyCheckbox />
      <button
        className={submitButtonStyle}
        type="submit"
        disabled={isFormComplete ? false : true}
      >{applicantForm.buttonName}</button>
    </form>
  );
}

export default App;

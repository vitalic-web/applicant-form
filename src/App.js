import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { applicantForm } from './utils/constants';
import SubTitle from './commonComponents/SubTitle/SubTitle';
import PersonalDataField from './features/personalDataField/PersonalDataField';
import AddFileBtn from './features/addFileBtn/AddFileBtn';
import GenderData from './features/genderData/GenderData';
import PrivacyCheckbox from './features/privacyCheckbox/PrivacyCheckbox';

function App() {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const formData = useSelector(state => state);
  console.log(formData);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('submit');
  };

  useEffect(() => {
    const isPersonalDataComplete = Boolean(formData.personalDataField.name && formData.personalDataField.surname && formData.personalDataField.email && formData.personalDataField.git);
    const isFileUploaded = formData.addFileBtn.isFileUploaded;
    const isGenderChecked = formData.genderData.isFemale || formData.genderData.isMale;
    const isAcceptPrivacy = formData.privacyCheckbox.isAcceptPrivacy;
    const test = Boolean(isPersonalDataComplete && isFileUploaded && isGenderChecked && isAcceptPrivacy);

    console.log('test', test);
  }, [formData]);

  return (
    <form className="App" onSubmit={handleSubmit}>
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
      <button className="SubmitButton" type="submit" disabled={false}>{applicantForm.buttonName}</button>
    </form>
  );
}

export default App;

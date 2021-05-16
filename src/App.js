import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { applicantForm } from './utils/constants';
import PersonalData from './features/personalData/PersonalData';
import GenderData from './features/genderData/GenderData';
import GithubData from './features/githubData/GithubData';
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
    const isPersonalDataComplete = Boolean(formData.personalData.name && formData.personalData.surname && formData.personalData.email);
    const isFileUploaded = formData.personalDataBtn.isFileUploaded;
    const isGenderChecked = formData.genderData.isFemale || formData.genderData.isMale;
    const isGithubLink = Boolean(formData.githubData.githubLink);
    const isAcceptPrivacy = formData.privacyCheckbox.isAcceptPrivacy;
    const test = Boolean(isPersonalDataComplete && isFileUploaded && isGenderChecked && isGithubLink && isAcceptPrivacy);

    console.log('test', test);
  }, [formData]);

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h1 className="Title">{applicantForm.title}</h1>
      <PersonalData />
      <GenderData />
      <GithubData />
      <PrivacyCheckbox />
      <button className="SubmitButton" type="submit" disabled={false}>{applicantForm.buttonName}</button>
    </form>
  );
}

export default App;

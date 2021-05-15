import './App.css';
import Title from '../Title/Title';
import PersonalData from '../PersonalData/PersonalData';
import GenderData from '../GenderData/GenderData';
import GithubData from '../GithubData/GithubData';
import PrivacyCheckbox from '../PrivacyCheckbox/PrivacyCheckbox';
import SubmitButton from '../SubmitButton/SubmitButton';

function App() {
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('submit');
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <Title />
      <PersonalData />
      <GenderData />
      <GithubData />
      <PrivacyCheckbox />
      <SubmitButton />
    </form>
  );
}

export default App;

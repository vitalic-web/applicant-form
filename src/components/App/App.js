import './App.css';
import { applicantForm } from '../../utils/constants';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';

function App() {
  return (
    <div className="App">
      <Title />
      <SubTitle name={applicantForm.personalData.name} />
    </div>
  );
}

export default App;

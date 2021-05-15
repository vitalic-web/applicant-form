import './GithubData.css';
import { applicantForm } from '../../utils/constants';
import SubTitle from '../SubTitle/SubTitle';
import PersonalDataField from '../PersonalDataField/PersonalDataField';

function GithubData() {
  return (
    <>
      <SubTitle name={applicantForm.github.name} />
      <PersonalDataField
        name={applicantForm.github.input.name}
        id={applicantForm.github.input.id}
        type={applicantForm.github.input.type}
        github={true}
      />
    </>
  )
};

export default GithubData;

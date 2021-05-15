import './PersonalData.css';
import { applicantForm } from '../../utils/constants';
import SubTitle from '../SubTitle/SubTitle';
import PersonalDataField from '../PersonalDataField/PersonalDataField';
import PersonalDataBtn from '../PersonalDataBtn/PersonalDataBtn';

function PersonalData() {
  return (
    <div className="PersonalData">
      <SubTitle name={applicantForm.personalData.name} />
      {applicantForm.personalData.inputs.map((input, index) =>
        <PersonalDataField key={index} name={input.name} id={input.id} type={input.type} />)}
      <PersonalDataBtn />
    </div>
  )
};

export default PersonalData;

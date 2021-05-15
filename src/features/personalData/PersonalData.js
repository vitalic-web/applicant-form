import { useSelector, useDispatch } from 'react-redux';
import { selectPersonalData, setInputData } from './personalDataSlice';
import './PersonalData.css';
import { applicantForm } from '../../utils/constants';
import SubTitle from '../../commonComponents/SubTitle/SubTitle';
import PersonalDataField from '../../commonComponents/PersonalDataField/PersonalDataField';
import PersonalDataBtn from '../../commonComponents/PersonalDataBtn/PersonalDataBtn';

function PersonalData() {
  const dispatch = useDispatch();
  const personalData = useSelector(selectPersonalData);
  console.log(personalData);

  const getInputData = evt => {
    dispatch(setInputData({ nameTest: evt.target.name, data: evt.target.value }));
  };

  return (
    <div className="PersonalData">
      <SubTitle name={applicantForm.personalData.name} />
      {applicantForm.personalData.inputs.map((input, index) =>
        <PersonalDataField
          key={index}
          name={input.name}
          id={input.id}
          type={input.type}
          inputData={personalData[input.id]}
          getInputData={getInputData} />)}
      <PersonalDataBtn />
    </div>
  )
};

export default PersonalData;

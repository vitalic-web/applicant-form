import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGenderData, setGender } from './genderDataSlice';
import './GenderData.css';
import { applicantForm } from '../../utils/constants';
import SubTitle from '../../commonComponents/SubTitle/SubTitle';

function GenderData() {
  const [activeRadioInput, setActiveRadioInput] = useState('');
  const genderData = useSelector(selectGenderData);
  const dispatch = useDispatch();
  console.log(genderData);

  const handleOnchange = evt => {
    setActiveRadioInput(evt.target.value);
    dispatch(setGender(evt.target.value));
    console.log(evt.target.value);
  };

  return (
    <>
      <SubTitle name={applicantForm.gender.name} />
      <div className="GenderData">
        {applicantForm.gender.inputs.map(input =>
          <div className="GenderData__item" key={input.id}>
            <input
              className="GenderData__input"
              type={input.type}
              id={input.id}
              value={input.id}
              onChange={handleOnchange}
              checked={activeRadioInput === input.id}
            />
            <label className="GenderData__label" htmlFor={input.id}>{input.name}</label>
          </div>)}
      </div>
    </>
  )
};

export default GenderData;

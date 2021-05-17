import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGenderData, setGender } from './genderDataSlice';
import './GenderData.css';
import { applicantForm, validationErrorMessages } from '../../utils/constants';
import SubTitle from '../../commonComponents/SubTitle/SubTitle';

function GenderData() {
  const [activeRadioInput, setActiveRadioInput] = useState('');
  const genderData = useSelector(selectGenderData);
  const dispatch = useDispatch();
  const isGenderChecked = genderData.isFemale || genderData.isMale;
  console.log(genderData);

  const handleOnchange = evt => {
    setActiveRadioInput(evt.target.value);
    dispatch(setGender(evt.target.value));
    console.log(evt.target.value);
  };

  const errorClass = `GenderData__error-text ${isGenderChecked ? 'GenderData__error-text_hidden' : ''}`;

  return (
    <>
      <div className="GenderData__container">
        <SubTitle name={applicantForm.gender.name} />
        <span className={errorClass}>{validationErrorMessages.gender}</span>
      </div>
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

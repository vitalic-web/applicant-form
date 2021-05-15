import { useState } from 'react';
import './GenderData.css';
import { applicantForm } from '../../utils/constants';
import SubTitle from '../SubTitle/SubTitle';

function GenderData() {
  const [activeRadioInput, setActiveRadioInput] = useState('');

  const handleOnchange = evt => {
    setActiveRadioInput(evt.target.value);
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

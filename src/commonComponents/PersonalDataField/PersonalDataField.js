import './PersonalDataField.css';

function PersonalDataField({ name, id, type, inputData, getInputData, github, }) {
  return (
    <div className="PersonalDataField">
      <label className="PersonalDataField__label" htmlFor={id}>{github ? name : `${name} *`}</label>
      <input
        onChange={getInputData}
        value={inputData}
        className="PersonalDataField__input"
        type={type}
        id={id}
        name={id}
        placeholder={name} />
    </div>
  )
};

export default PersonalDataField;

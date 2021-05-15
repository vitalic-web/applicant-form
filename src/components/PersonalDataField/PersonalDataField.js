import './PersonalDataField.css';

function PersonalDataField({ name, id, type, github }) {
  return (
    <div className="PersonalDataField">
      <label className="PersonalDataField__label" htmlFor={id}>{github ? name : `${name} *`}</label>
      <input className="PersonalDataField__input" type={type} id={id} placeholder={name} />
    </div>
  )
};

export default PersonalDataField;

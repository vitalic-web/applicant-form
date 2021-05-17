import { useSelector, useDispatch } from 'react-redux';
import { selectPersonalDataField, setInputData, setValidity } from './personalDataFieldSlice';
import './PersonalDataField.css';
import { validationErrorMessages } from '../../utils/constants';

function PersonalDataField({ name, id, type, github }) {
  const dispatch = useDispatch();
  const personalDataField = useSelector(selectPersonalDataField);
  console.log('personalDataField', personalDataField);

  const getInputData = evt => {
    dispatch(setInputData({ name: evt.target.name, data: evt.target.value }));
    dispatch(setValidity({ name: evt.target.name, validity: evt.target.validity.valid }));
  };

  const getRegExpForInput = (type) => {
    switch (type) {
      case 'name': {
        return '^[A-Za-zА-Яа-яЁё]+$';
      }
      case 'surname': {
        return '^[A-Za-zА-Яа-яЁё]+$';
      }
      case 'email': {
        return '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
      }
      case 'git': {
        return 'http(s?)(:\/\/)((www.)?)([a-zA-z0-9\-_]+)(.com)(\/[^\s]*)?'
      }
      default:
        throw new Error();
    }
  };

  const regExpForInput = getRegExpForInput(id);

  return (
    <div className="PersonalDataField">
      <label className="PersonalDataField__label" htmlFor={id}>{github ? name : `${name} *`}</label>
      <input
        onChange={getInputData}
        value={personalDataField[id]}
        className="PersonalDataField__input PersonalDataField__input_error"
        type={type}
        id={id}
        name={id}
        placeholder={name}
        autoComplete="off"
        pattern={regExpForInput}
      />
      <span className="PersonalDataField__error-message">{!personalDataField[`${id}Validity`] ? validationErrorMessages[id] : ""}</span>
    </div>
  )
};

export default PersonalDataField;

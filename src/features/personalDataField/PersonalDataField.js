import { useSelector, useDispatch } from 'react-redux';
import { selectPersonalDataField, setInputData, setValidity } from './personalDataFieldSlice';
import './PersonalDataField.css';
import { validationErrorMessages } from '../../utils/constants';

function PersonalDataField({ name, id, type, github }) {
  const dispatch = useDispatch();
  const personalDataField = useSelector(selectPersonalDataField);

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
        // eslint-disable-next-line no-useless-escape
        return '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
      }
      case 'git': {
        // eslint-disable-next-line no-useless-escape
        return 'http(s?)(:\/\/)((www.)?)([a-zA-z0-9\-_]+)(.com)(\/[^\s]*)?';
      }
      default:
        throw new Error();
    }
  };

  const isValidationError = !personalDataField[`${id}Validity`];

  return (
    <div className="PersonalDataField">
      <label className="PersonalDataField__label" htmlFor={id}>{github ? name : `${name} *`}</label>
      <input
        onChange={getInputData}
        value={personalDataField[id]}
        className={`PersonalDataField__input ${isValidationError ? 'PersonalDataField__input_error' : ''}`}
        type={type}
        id={id}
        name={id}
        placeholder={name}
        autoComplete="off"
        pattern={getRegExpForInput(id)}
      />
      <span className="PersonalDataField__error-message">{isValidationError ? validationErrorMessages[id] : ''}</span>
    </div>
  )
};

export default PersonalDataField;

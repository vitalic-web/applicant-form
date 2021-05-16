import { useSelector, useDispatch } from 'react-redux';
import { selectPrivacyCheckbox, setIsAcceptPrivacy } from './privacyCheckboxSlice';
import './PrivacyCheckbox.css';

function PrivacyCheckbox() {
  const privacyCheckboxData = useSelector(selectPrivacyCheckbox);
  const dispatch = useDispatch();
  console.log(privacyCheckboxData);

  const handleClickedCheckbox = () => dispatch(setIsAcceptPrivacy());

  return (
    <div className="PrivacyCheckbox">
      <input
        className="PrivacyCheckbox__input"
        type="checkbox"
        id="privacy"
        checked={privacyCheckboxData.isAcceptPrivacy}
        onChange={handleClickedCheckbox}
      />
      <label
        className="PrivacyCheckbox__label"
        htmlFor="privacy">
      </label>
      <div className="PrivacyCheckbox__text">* Я согласен с&nbsp;<span onClick={() => console.log('click')} className="PrivacyCheckbox__link">политикой конфиденциальности</span></div>
    </div>
  )
};

export default PrivacyCheckbox;

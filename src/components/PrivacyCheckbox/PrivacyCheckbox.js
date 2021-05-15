import './PrivacyCheckbox.css';

function PrivacyCheckbox() {
  return (
    <div className="PrivacyCheckbox">
      <input className="PrivacyCheckbox__input" type="checkbox" id="privacy" />
      <label
        className="PrivacyCheckbox__label"
        htmlFor="privacy">
      </label>
      <div className="PrivacyCheckbox__text">* Я согласен с&nbsp;<span onClick={() => console.log('click')} className="PrivacyCheckbox__link">политикой конфиденциальности</span></div>
    </div>
  )
};

export default PrivacyCheckbox;

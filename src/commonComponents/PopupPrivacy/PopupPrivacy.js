import { useDispatch } from 'react-redux';
import './PopupPrivacy.css';
import { popupBtnTitle, privacyText } from '../../utils/constants';
import PopupBtn from '../../commonComponents/PopupBtn/PopupBtn';
import closeIcon from '../../images/closePrivacy.svg';
import { checkPrivacy } from '../../features/privacyCheckbox/privacyCheckboxSlice';

function PopupPrivacy({ isActivePopup, setIsActivePopupPrivacy }) {
  const dispatch = useDispatch();

  const handleSubmitForm = () => {
    dispatch(checkPrivacy());
    setIsActivePopupPrivacy(false);
  };

  return (
    <div className={`PopupPrivacy ${isActivePopup ? 'PopupPrivacy_active' : ''}`}>
      <div className="PopupPrivacy__container">
        <div className="PopupPrivacy__inner">
          <h2 className="PopupPrivacy__inner-title">Политика конфиденциальности</h2>
          {
            privacyText.map((item, index) =>
              <div key={index}>
                <h3 className="PopupPrivacy__text-title">{item.title}</h3>
                {item.text.map((textItem, index) => <p key={index++} className="PopupPrivacy__text">{textItem}</p>)}
              </div>)
          }
        </div>
        <PopupBtn title={popupBtnTitle.privacy} handleClick={handleSubmitForm} isPrivacy={true} />
        <img
          className="PopupPrivacy__close-icon"
          src={closeIcon}
          alt="close"
          onClick={() => setIsActivePopupPrivacy(false)}
        />
      </div>
    </div>
  )
};

export default PopupPrivacy;

import { useDispatch } from 'react-redux';
import { clearAll } from '../../features/personalDataField/personalDataFieldSlice';
import { setUserFile } from '../../features/addFileBtn/addFileBtnSlice';
import { setNotCheckedGender } from '../../features/genderData/genderDataSlice';
import { setIsAcceptPrivacy } from '../../features/privacyCheckbox/privacyCheckboxSlice';
import './Popup.css';
import PopupBtn from '../PopupBtn/PopupBtn';
import { popupBtnTitle } from '../../utils/constants';

function Popup({ userName, isActivePopup, setIsActivePopup }) {
  const dispatch = useDispatch();
  const handleSubmitForm = () => {
    dispatch(clearAll());
    dispatch(setUserFile(false));
    dispatch(setNotCheckedGender(false));
    dispatch(setIsAcceptPrivacy());
    setIsActivePopup(false);
  };

  return (
    <div className={`Popup ${isActivePopup ? 'Popup_active' : ''}`}>
      <div className="Popup__container">
        <h2 className="Popup__title">{`Спасибо ${userName}!`}</h2>
        <p className="Popup__text">Мы скоро свяжемся с вами</p>
        <PopupBtn title={popupBtnTitle.confirm} handleClick={handleSubmitForm} />
      </div>
    </div>
  )
};

export default Popup;

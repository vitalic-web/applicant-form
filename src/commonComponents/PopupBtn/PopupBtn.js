import './PopupBtn.css';

function PopupBtn({ title, handleClick, isPrivacy }) {
  return (
    <button className={`PopupBtn ${isPrivacy ? 'PopupBtn_privacy' : ''}`} onClick={handleClick} type="button">{title}</button>
  )
};

export default PopupBtn;

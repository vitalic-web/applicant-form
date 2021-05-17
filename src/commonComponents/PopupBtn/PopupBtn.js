import './PopupBtn.css';

function PopupBtn({ title, handleClick }) {
  return (
    <button className="PopupBtn" onClick={handleClick} type="button">{title}</button>
  )
};

export default PopupBtn;

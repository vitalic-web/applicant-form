import './SubmitButton.css';
import { applicantForm } from '../../utils/constants';

function SubmitButton() {
  return (
    <button className="SubmitButton" type="submit" disabled={false}>{applicantForm.buttonName}</button>
  )
};

export default SubmitButton;

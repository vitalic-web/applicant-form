import './Title.css';
import { applicantForm } from '../../utils/constants';

function Title() {
  return (
    <h1 className="Title">{applicantForm.title}</h1>
  )
};

export default Title;

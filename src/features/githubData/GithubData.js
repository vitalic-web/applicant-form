import { useSelector, useDispatch } from 'react-redux';
import { selectGithubData, setGithubLink } from './githubDataSlice';
import './GithubData.css';
import { applicantForm } from '../../utils/constants';
import SubTitle from '../../commonComponents/SubTitle/SubTitle';
import PersonalDataField from '../../commonComponents/PersonalDataField/PersonalDataField';

function GithubData() {
  const githubData = useSelector(selectGithubData);
  const dispatch = useDispatch();
  console.log(githubData);

  const getGithubLink = evt => {
    dispatch(setGithubLink(evt.target.value));
  };

  return (
    <>
      <SubTitle name={applicantForm.github.name} />
      <PersonalDataField
        name={applicantForm.github.input.name}
        id={applicantForm.github.input.id}
        type={applicantForm.github.input.type}
        inputData={githubData.githubLink}
        getInputData={getGithubLink}
        github={true}
      />
    </>
  )
};

export default GithubData;

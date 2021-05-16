import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPersonalDataBtn, setUserFile } from './personalDataBtnSlice';
import './PersonalDataBtn.css';
import plusImg from '../../images/plus.svg';
import addFileImg from '../../images/addFile.svg';
import deleteAddedFileImg from '../../images/deleteAddedFile.svg';

function PersonalDataBtn() {
  const personalDataBtn = useSelector(selectPersonalDataBtn);
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [inputFile, setInputFile] = useState('');
  const [isActiveDeleteFile, setIsActiveDeleteFile] = useState(false);
  console.log(personalDataBtn);

  const getFile = () => {
    const { current } = fileInput;

    if (current && current.files.length) {
      return current.files[0];
    } else {
      return null;
    }
  };

  const handleOnUpload = () => {
    const file = getFile();
    setInputFile(file);
    dispatch(setUserFile(true));
  };

  const deleteFile = () => {
    setInputFile('');
    dispatch(setUserFile(false));
  };

  return (
    <>
      {
        inputFile
          ?
          <div
            onMouseEnter={() => setIsActiveDeleteFile(true)}
            onMouseLeave={() => setIsActiveDeleteFile(false)}
            className="PersonalDataBtn__added-file">
            <div className="PersonalDataBtn__container">
              <img className="PersonalDataBtn__add-logo" src={addFileImg} alt="прикрепленный файл" />
              <p className="PersonalDataBtn__file-name">{inputFile.name}</p>
            </div>
            <img
              className={`PersonalDataBtn__delete-file ${!isActiveDeleteFile ? "PersonalDataBtn__delete-file_hidden" : ""}`}
              src={deleteAddedFileImg}
              alt="удалить файл"
              onClick={deleteFile} />
          </div>
          :
          <div className="PersonalDataBtn">
            <input
              className="PersonalDataBtn__input"
              id="file"
              type="file"
              ref={fileInput}
              onChange={handleOnUpload}
            />
            <label className="PersonalDataBtn__label" htmlFor="file">
              <img className="PersonalDataBtn__image" src={plusImg} alt="добавить" />
              <p className="PersonalDataBtn__text">Загрузить резюме</p>
            </label>
          </div>
      }
    </>
  )
};

export default PersonalDataBtn;

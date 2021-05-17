import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddFileBtn, setUserFile } from './addFileBtnSlice';
import './AddFileBtn.css';
import plusImg from '../../images/plus.svg';
import addFileImg from '../../images/addFile.svg';
import deleteAddedFileImg from '../../images/deleteAddedFile.svg';

function AddFileBtn() {
  const addFileBtnData = useSelector(selectAddFileBtn);
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [inputFile, setInputFile] = useState('');
  const [isActiveDeleteFile, setIsActiveDeleteFile] = useState(false);
  console.log(addFileBtnData);

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
            className="AddFileBtn__added-file">
            <div className="AddFileBtn__container">
              <img className="AddFileBtn__add-logo" src={addFileImg} alt="прикрепленный файл" />
              <p className="AddFileBtn__file-name">{inputFile.name}</p>
            </div>
            <img
              className={`AddFileBtn__delete-file ${!isActiveDeleteFile ? "AddFileBtn__delete-file_hidden" : ""}`}
              src={deleteAddedFileImg}
              alt="удалить файл"
              onClick={deleteFile} />
          </div>
          :
          <div className="AddFileBtn">
            <input
              className="AddFileBtn__input"
              id="file"
              type="file"
              ref={fileInput}
              onChange={handleOnUpload}
            />
            <label className="AddFileBtn__label" htmlFor="file">
              <img className="AddFileBtn__image" src={plusImg} alt="добавить" />
              <p className="AddFileBtn__text">Загрузить резюме</p>
            </label>
          </div>
      }
    </>
  )
};

export default AddFileBtn;

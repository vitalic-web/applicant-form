import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddFileBtn, setUserFile, setFileUploadedValidity } from './addFileBtnSlice';
import './AddFileBtn.css';
import plusImg from '../../images/plus.svg';
import addFileImg from '../../images/addFile.svg';
import addFileErrorImg from '../../images/addFile_error.svg';
import deleteAddedFileImg from '../../images/deleteAddedFile.svg';
import deleteAddedFileErrorImg from '../../images/deleteAddedFile_error.svg';
import { validationErrorMessages, fileSize } from '../../utils/constants';

function AddFileBtn() {
  const addFileBtnData = useSelector(selectAddFileBtn);
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [inputFile, setInputFile] = useState('');
  const [isActiveDeleteFile, setIsActiveDeleteFile] = useState(false);
  console.log('addFileBtnData', addFileBtnData);
  console.log('inputFileSize', Math.floor(inputFile.size / 1000000));

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
    const fileValidity = Math.floor(file.size / 1000000) < fileSize;
    console.log('fileValidity', fileValidity);
    setInputFile(file);
    setIsActiveDeleteFile(false);
    dispatch(setUserFile(true));
    dispatch(setFileUploadedValidity(fileValidity));
  };

  const deleteFile = () => {
    setInputFile('');
    dispatch(setUserFile(false));
    dispatch(setFileUploadedValidity(true));
  };

  const addFileBtnClasses = {
    addedFile: `AddFileBtn__added-file ${!addFileBtnData.fileUploadedValidity ? 'AddFileBtn__added-file_error' : ''}`,
    fileName: `AddFileBtn__file-name ${!addFileBtnData.fileUploadedValidity ? 'AddFileBtn__file-name_error' : ''}`,
    visibilityOfDeleteBtn: !addFileBtnData.fileUploadedValidity ? 'AddFileBtn__delete-file' : `AddFileBtn__delete-file ${!isActiveDeleteFile ? 'AddFileBtn__delete-file_hidden' : ''}`,
    errorText: `AddFileBtn__error-text ${addFileBtnData.fileUploadedValidity ? 'AddFileBtn__error-text_hidden' : ''}`
  };

  return (
    <>
      {
        inputFile
          ?
          <div
            className={addFileBtnClasses.addedFile}
            onMouseEnter={() => setIsActiveDeleteFile(true)}
            onMouseLeave={() => setIsActiveDeleteFile(false)}
          >
            <div className="AddFileBtn__container">
              <img
                className="AddFileBtn__add-logo"
                src={addFileBtnData.fileUploadedValidity ? addFileImg : addFileErrorImg}
                alt="прикрепленный файл"
              />
              <p className={addFileBtnClasses.fileName}>{inputFile.name}</p>
            </div>
            <img
              className={addFileBtnClasses.visibilityOfDeleteBtn}
              src={addFileBtnData.fileUploadedValidity ? deleteAddedFileImg : deleteAddedFileErrorImg}
              alt="удалить файл"
              onClick={deleteFile}
            />
            <span className={addFileBtnClasses.errorText}>{validationErrorMessages.file}</span>
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

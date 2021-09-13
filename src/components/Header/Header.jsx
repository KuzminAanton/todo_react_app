import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import axios from "axios";
import './Header.scss'

const Header = ({ allList, setAllList }) => {

  const [inputValue, setInputValue] = useState('');

  const clearInputValue = () => {
    setInputValue('');
  };

  const addNote = () => {
    axios.post('http://localhost:8000/createTask', {
      text: inputValue,
      isCheck: false
    }).then((res) => {
      clearInputValue();
      setAllList([...res.data.data]);
    });
  };

  const BtnMain = {
    add: {
      classStyle: "btn btn-success",
      value: <svg xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
      </svg>,
      onClickFunc: addNote
    },
    cancel: {
      classStyle: "btn btn-danger",
      value: <svg xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>,
      onClickFunc: clearInputValue
    }
  }

  const MainInput = {
    classStyle: "form-control",
    value: inputValue,
    onChange: setInputValue
  };

  allList.sort((a, b) => a.isCheck - b.isCheck);

  return (
    <header>
      <div className="header-title">
        <h1>To-Do List</h1>
      </div>
      <div className="header-inputs">
        <Input InputSettings={MainInput}/>
        <Button BtnSettings={BtnMain.add}/>
        <Button BtnSettings={BtnMain.cancel}/>
      </div>
    </header>
  );
};

export default Header;

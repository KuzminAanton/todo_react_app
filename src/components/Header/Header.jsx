import React, {useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import axios from "axios";

import './Header.scss'

const Header = ({ allList, setAllList }) => {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const clearInputValue = () => {
    setInputValue('');
  };

  const addNote = () => {
    if (inputValue && inputValue.trim().length) {
      axios.post('http://localhost:8000/createTask', {
        text: inputValue,
        isCheck: false
      }).then((res) => {
        clearInputValue();
        setAllList([...res.data.data]);
      });
    } else {
      clearInputValue();
      setPlaceholder('empty field');
    }
  };

  allList.sort((a, b) => a.isCheck - b.isCheck);

  return (
    <header>
      <div className="header-title">
        <Typography
          variant={"h2"}
          fontWeight={700}
          color={"color_h1"}
          align={"center"}
        >
          To-Do List
        </Typography>
      </div>
      <div className="header-inputs">
        <TextField
          value={inputValue}
          placeholder={placeholder}
          variant="outlined"
          onChange={event => setInputValue(event.target.value)}/>
        <Button
          onClick={addNote}
          variant="contained"
          color="success"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg>
        </Button>
        <Button
          onClick={clearInputValue}
          variant="contained">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;

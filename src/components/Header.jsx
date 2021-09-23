import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { Backspace, NoteAdd } from '@mui/icons-material';
import axios from 'axios';

const Header = (props) => {
  const { allList, setAllList } = props;
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const clearInputValue = () => {
    setInputValue('');
  };

  const addNote = () => {
    if (inputValue && inputValue.trim().length) {
      axios.post('http://localhost:8000/createTask', {
        text: inputValue,
        isCheck: false,
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
          variant="h2"
          fontWeight={700}
          color="color_h1"
          align="center"
        >
          To-Do List
        </Typography>
      </div>
      <Box
        mt="2rem"
        display="flex"
        className="header-inputs"
      >
        <TextField
          className="text-field-main-input"
          value={inputValue}
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Box display="flex" className="main-btns">
          <Button
            className="btn-main-header"
            onClick={addNote}
            variant="outlined"
            color="success"
          >
            <NoteAdd />
          </Button>
          <Button
            className="btn-main-header"
            onClick={clearInputValue}
            variant="outlined"
          >
            <Backspace />
          </Button>
        </Box>
      </Box>
    </header>
  );
};

export default Header;

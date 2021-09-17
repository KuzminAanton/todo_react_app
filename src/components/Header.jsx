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
  const { allList, setAllList, indexEdit } = props;
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
          disabled={indexEdit >= 0 && true}
          value={inputValue}
          placeholder={placeholder}
          variant="outlined"
          style={{
            backgroundColor: `${indexEdit >= 0 ? 'lightgray' : 'white'}`,
            border: 'none',
            borderRadius: '5px' }}
          fullWidth
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Box display="flex" className="main-btns">
          <Button
            disabled={indexEdit >= 0 && true}
            onClick={addNote}
            variant="outlined"
            color="success"
            style={{ backgroundColor: 'white' }}
          >
            <NoteAdd/>
          </Button>
          <Button
            disabled={indexEdit >= 0 && true}
            onClick={clearInputValue}
            variant="outlined"
            style={{ backgroundColor: 'white' }}
          >
            <Backspace/>
          </Button>
        </Box>
      </Box>
    </header>
  );
};

export default Header;

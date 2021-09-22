import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  TextField,
} from '@mui/material';
import { Cancel, CheckCircle } from '@mui/icons-material';

const ListItemEdit = (props) => {
  const { allList, setAllList, indexEdit, goToStatic } = props;
  const [inputValue, setInputValue] = useState(allList[indexEdit]?.text);
  const [placeholder, setPlaceholder] = useState('');

  const closeInputValue = () => {
    setInputValue('');
    goToStatic();
  };

  const editItemAccept = () => {
    if (inputValue && inputValue.trim().length) {
      axios.patch('http://localhost:8000/updateTask', {
        _id: allList[indexEdit],
        text: inputValue,
      }).then((res) => {
        setAllList([...res.data.data]);
      });
      closeInputValue();
    } else {
      setInputValue('');
      setPlaceholder('empty field');
    }
  };

  return (
    <Box mt="1.5rem">
      <Card>
        <TextField
          defaultValue={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          multiline
          rows={10}
          fullWidth
          placeholder={placeholder}
        />
        <Box
          m="20px 0"
          display="flex"
          justifyContent="center">
          <Button onClick={editItemAccept}>
            <CheckCircle/>
          </Button>
          <Button onClick={closeInputValue}>
            <Cancel/>
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ListItemEdit;

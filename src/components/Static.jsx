import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { DeleteSweep } from '@mui/icons-material';
import axios from 'axios';
import List from './List';
import Header from './Header';

const Static = (props) => {
  const { allList, setAllList, goToEdit } = props;

  const deleteTaskAll = () => {
    axios.delete('http://localhost:8000/deleteTaskAll').then(
      (res) => setAllList([...res.data.data]),
    );
  };

  return (
    <>
      <Header
        allList={allList}
        setAllList={setAllList}
      />
      <List
        allList={allList}
        setAllList={setAllList}
        goToEdit={goToEdit}
      />
      <Box
        m="1.5rem 0 2rem 0"
        display="flex"
        justifyContent="center"

      >
        <Button
          disabled={allList.length <= 1}
          className="btn-delete-all"
          onClick={deleteTaskAll}
          color="error"
          variant="outlined"
          size="small"
        >
          <Typography m="0 10px 0 10px" variant="span">
            Delete All
          </Typography>
          <DeleteSweep />
        </Button>
      </Box>
    </>
  );
};

export default Static;

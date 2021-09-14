import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import axios from "axios";
import {Container} from "@mui/material";

import './App.scss';

const App = () => {
  const [allList, setAllList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then((res) => {
      setAllList(res.data.data);
    });
  }, [setAllList]);

  return (
    <>
      <Container
        sx={{
          mt: '2rem'
        }}
      >
        <Header
          allList={allList}
          setAllList={setAllList}
        />
        <List
          allList={allList}
          setAllList={setAllList}
        />
      </Container>
    </>
  );
};

export default App;

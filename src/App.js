import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Container } from '@mui/material';
import Header from './components/Header';
import List from "./components/List";
import ListItemEdit from "./components/ListItemEdit";

import './App.scss';

const App = () => {
  let history = useHistory();
  const [allList, setAllList] = useState([]);
  const [indexEdit, setIndexEdit] = useState(-1);

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then((res) => {
      setAllList(res.data.data);
    });
  }, [setAllList]);

  const goToEdit = (index) => {
    setIndexEdit(index);
    history.push(`/edit/${index + 1}`);
  };

  const goToStatic = () => {
    history.push(`/static/`);
    setIndexEdit(-1);
  };

  return (
    <Container
      sx={{
        mt: '2rem',
      }}
    >
      <Header
        allList={allList}
        setAllList={setAllList}
        indexEdit={indexEdit}
      />
      <Switch>
        <Route path='/static/'>
          <List
            allList={allList}
            setAllList={setAllList}
            goToEdit={goToEdit}
          />
        </Route>
        <Route path='/edit/:_id'>
          <ListItemEdit
            allList={allList}
            setAllList={setAllList}
            indexEdit={indexEdit}
            goToStatic={goToStatic}
          />
        </Route>
        <Redirect from='/' exact to='/static'/>
      </Switch>
    </Container>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { Container } from '@mui/material';
import ListItemEdit from './components/ListItemEdit';
import Static from './components/Static';

import './App.scss';

const App = () => {
  const history = useHistory();
  const [allList, setAllList] = useState([]);
  const [indexEdit, setIndexEdit] = useState();

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
    history.push('/static/');
    setIndexEdit(-1);
  };

  return (
    <Container className="app">
      <Switch>
        <Route path="/static/">
          <Static
            allList={allList}
            setAllList={setAllList}
            goToEdit={goToEdit}
          />
        </Route>
        <Route path="/edit/:_id">
          <ListItemEdit
            allList={allList}
            setAllList={setAllList}
            indexEdit={indexEdit}
            goToStatic={goToStatic}
          />
        </Route>
        <Redirect from="/" exact to="/static" />
      </Switch>
    </Container>
  );
};

export default App;

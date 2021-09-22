import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { DeleteSweep } from '@mui/icons-material';
import Header from './components/Header';
import List from './components/List';
import ListItemEdit from './components/ListItemEdit';

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

  const deleteTaskAll = () => {
    axios.delete('http://localhost:8000/deleteTaskAll').then(
      (res) => {
        setAllList([...res.data.data]);
      },
    );
  };

  return (
    <Container
      sx={{
        height: '96vh',
      }}
    >
      <Switch>
        <Route path="/static/">
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
              onClick={deleteTaskAll}
              color="error"
              variant="outlined"
              size="small"
              style={{ backgroundColor: 'white' }}
            >
              <Typography m="0 10px 0 10px" variant="span">
                Delete All
              </Typography>
              <DeleteSweep />
            </Button>
          </Box>
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

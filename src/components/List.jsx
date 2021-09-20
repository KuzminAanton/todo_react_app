import React from 'react';
import axios from 'axios';
import {
  DeleteSweep,
  ModeEditOutlineOutlined,
  RestoreFromTrashOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Grid,
  Typography,
} from '@mui/material';

const List = (props) => {
  const { allList, setAllList, goToEdit } = props;

  const deleteTaskAll = () => {
    axios.delete('http://localhost:8000/deleteTaskAll').then(
      (res) => {
        setAllList([...res.data.data]);
      },
    );
  };

  const deleteTask = (index) => {
    axios.delete(`http://localhost:8000/deleteTask?_id=${allList[index]._id}`, {}).then(
      (res) => {
        setAllList([...res.data.data]);
      },
    );
  };

  const changeEditStatus =  (index) => {
     goToEdit(index);
  };

  const changeIsCheck = (index) => {
    allList[index].isCheck = !allList[index].isCheck;
    const { _id, isCheck } = allList[index];
    axios.patch('http://localhost:8000/updateTask', {
      _id,
      isCheck,
    }).then((res) => {
      setAllList([...res.data.data]);
    });
  };

  return (
    <Box mt="2rem" display="flex" flexDirection="column">
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 1, sm: 1, md: 2 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {allList.map((value, index) => (
          <Grid item xs={2} sm={6} md={6} key={index}>
            <Card>
              <Box bgcolor={allList[index].isCheck ? 'bgcolor_disable' : 'background.default'}>
                <CardContent>
                  <Typography variant="h5" component="span">
                    {`${index + 1}`}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                    textOverflow="ellipsis"
                    overflow="hidden"
                  >
                    {allList[index].text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    justifyContent="space-between"
                  >
                    <Checkbox
                      checked={allList[index].isCheck}
                      onChange={ () =>  changeIsCheck(index)}
                    />
                    <Box
                      sx={{ width: 136 }}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Button size="small"
                              variant="outlined"
                              color="warning"
                              onClick={ () =>  changeEditStatus(index)}
                      >
                        <ModeEditOutlineOutlined/>
                      </Button>
                      <Button
                        size="small"
                        onClick={() => deleteTask(index)}
                        variant="outlined"
                        color="error"
                      >
                        <RestoreFromTrashOutlined/>
                      </Button>
                    </Box>
                  </Grid>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        m="1.5rem 0 2rem 0"
        display="flex"
        justifyContent="center">
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
          <DeleteSweep/>
        </Button>
      </Box>
    </Box>
  );
};

export default List;

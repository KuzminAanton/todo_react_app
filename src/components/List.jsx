import React from 'react';
import axios from 'axios';
import {
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

  const deleteTask = (index) => {
    axios.delete(`http://localhost:8000/deleteTask?_id=${allList[index]._id}`, {}).then(
      (res) => {
        setAllList([...res.data.data]);
      },
    );
  };

  const changeEditStatus = (index) => {
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
      <Grid className="wrapper-lists-grid">
        <Box className="wrapper-lists">
          {allList.map((value, index) => (
            <Card className={`list-item ${value.isCheck ? 'list-item-disabled' : ''}`}>
              <CardContent>
                <Typography variant="h5" component="span">
                  {`${index + 1}`}
                </Typography>
                <Typography
                  className={`item-main-text ${value.isCheck ? 'text-through' : ''}`}
                  variant="body2"
                  color="text.secondary"
                  component="p"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {value.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Box
                  display="flex"
                  justifyContent="space-between"
                >
                  <Checkbox
                    checked={value.isCheck}
                    onChange={() => changeIsCheck(index)}
                  />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    className={`list-item-btn ${value.isCheck ? 'list-item-btn__disabled' : ''}`}
                  >
                    <Button
                      className="list-item-btn-edit"
                      disabled={value.isCheck}
                      size="small"
                      variant="outlined"
                      color="warning"
                      onClick={() => changeEditStatus(index)}
                    >
                      <ModeEditOutlineOutlined />
                    </Button>
                    <Button
                      size="small"
                      onClick={() => deleteTask(index)}
                      variant="outlined"
                      color="error"
                    >
                      <RestoreFromTrashOutlined />
                    </Button>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Grid>
  );
};

export default List;

import React from 'react';
import axios from 'axios';
import {
  ModeEditOutlineOutlined,
  RestoreFromTrashOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card, CardActionArea,
  CardActions,
  CardContent, CardMedia,
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
      <Grid className="wrapper-lists">
        {allList.map((value, index) => (
          <Card className={`list-item ${allList[index].isCheck ? 'list-item-disabled' : ''}`}>
            <CardContent>
              <Typography variant="h5" component="span">
                {`${index + 1}`}
              </Typography>
              <Typography
                className={`item-main-text ${allList[index].isCheck ? 'text-through' : ''}`}
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
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Checkbox
                  checked={allList[index].isCheck}
                  onChange={() => changeIsCheck(index)}
                />
                <Box
                  sx={{ width: 136 }}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  className={`list-item-btn ${allList[index].isCheck ? 'list-item-btn__disabled' : ''}`}
                >
                  <Button
                    className="list-item-btn-edit"
                    disabled={allList[index].isCheck}
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
      </Grid>
  );
};

export default List;

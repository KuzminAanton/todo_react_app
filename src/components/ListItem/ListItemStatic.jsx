import React from 'react';
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox, Grid,
  Typography
} from "@mui/material";
import {ModeEditOutlineOutlined, RestoreFromTrashOutlined} from "@mui/icons-material";

const ListItemStatic = (props) => {
  const { text, index, allList, setAllList, checkEdit, setCheckEdit } = props.ListItem;

  const deleteTask = () => {
    axios.delete(`http://localhost:8000/deleteTask?_id=${allList[index]._id}`, {}).then(
      (res) => {
        setAllList([...res.data.data]);
      });
  };

  const changeEditStatus = () => {
    setCheckEdit(!checkEdit);
  };

  const changeIsCheck = () => {

    allList[index].isCheck = !allList[index].isCheck;
    const { _id, isCheck } = allList[index];
    axios.patch('http://localhost:8000/updateTask', {
      _id,
      isCheck
    }).then((res) => {
      setAllList([...res.data.data]);
    });
  };

  return (
    <Card>
      <Box bgcolor={allList[index].isCheck ? "bgcolor_disable" : "background.default"}>
        <CardContent>
          <Typography variant="h5" component="span">
            {`${index + 1}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            justifyContent="space-between">
            <Checkbox
              checked={allList[index].isCheck}
              onChange={() => changeIsCheck(index)}
            />
            <Grid
              sx={{ width: 136 }}
              container
              justifyContent="space-between"
            >
              <Button
                size="small"
                onClick={changeEditStatus}
                variant="outlined"
                color="warning"
              >
                <ModeEditOutlineOutlined/>
              </Button>
              <Button
                size="small"
                onClick={deleteTask}
                variant="outlined"
                color={"info"}
              >
                <RestoreFromTrashOutlined/>
              </Button></Grid>
          </Grid>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ListItemStatic;

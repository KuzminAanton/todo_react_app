import React from 'react';
import ListItem from "../ListItem/ListItem";
import {Box, Button, Grid} from "@mui/material";
import axios from "axios";
import './List.scss';

const List = ({ allList, setAllList }) => {

  const deleteTaskAll = () => {
    axios.delete('http://localhost:8000/deleteTaskAll').then(
      (res) => {
        setAllList([...res.data.data]);
      })
  };

  return (
    <Box mt={"2rem"}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={"lists"}>      {
        allList.map((value, i) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <ListItem
                index={i}
                text={value.text}
                setAllList={setAllList}
                allList={allList}
              />
            </Grid>
          )
        })}
      </Grid>
      <Button
        onClick={deleteTaskAll}
        color={"error"}
        variant="outlined"
        size="small"
      >
        Delete All
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-trash-fill"
          viewBox="0 0 16 16">
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
      </Button>
    </Box>
  );
};

export default List;

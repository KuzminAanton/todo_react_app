import React from 'react';
import ListItem from "../ListItem/ListItem";
import Button from "../UI/Button/Button";
import axios from "axios";
import './List.scss';

const List = ({ allList, setAllList }) => {

  const deleteTaskAll = () => {
    axios.delete('http://localhost:8000/deleteTaskAll').then(
      (res) => {
        setAllList([...res.data.data]);
      })
  };

  const BtnDelAll = {
    classStyle: "btn btn-danger btn-delete-all",
    value: <svg xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16">
      <path
        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg>,
    onClickFunc: deleteTaskAll
  }

  return (
    <>
      <div className={"lists"}>      {
        allList.map((value, i) => {
          return (
            <ListItem key={i + 1}
                      index={i}
                      text={value.text}
                      setAllList={setAllList}
                      allList={allList}
            />
          )
        })}
      </div>
      <Button BtnSettings={BtnDelAll}/>
    </>
  );
};

export default List;

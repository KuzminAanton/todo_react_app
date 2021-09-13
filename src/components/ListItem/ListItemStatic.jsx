import React from 'react';
import Button from "../UI/Button/Button";
import axios from "axios";

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

  const BtnNote = {
    del: {
      classStyle: "btn btn-danger",
      value: <svg xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash2-fill"
                  viewBox="0 0 16 16">
        <path
          d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
      </svg>,
      onClickFunc: deleteTask
    },
    edit: {
      classStyle: "btn btn-warning",
      value: <svg xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pen-fill"
                  viewBox="0 0 16 16">
        <path
          d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
      </svg>,
      onClickFunc: changeEditStatus
    }
  }

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
    <div className={`list list-item-${index + 1}`}>
      <div className="list-text">
        <span className="list-text-number">
          {`${index + 1}`}
        </span>
        <span className="list-text-content">
          {text}
        </span>
        <input class="form-check-input" checked={allList[index].isCheck} onChange={() => changeIsCheck(index)} type="checkbox"/>
      </div>
      <div className="list-buttons">
        <Button BtnSettings={BtnNote.del}/>
        <Button BtnSettings={BtnNote.edit}/>
      </div>
    </div>
  );
};

export default ListItemStatic;

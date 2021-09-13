import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import axios from "axios";
import Button from "../UI/Button/Button";

const ListItemEdit = (props) => {

  const { text, index, allList, setAllList, setCheckEdit } = props.ListItem;
  const [inputValue, setInputValue] = useState(text);

  const MainInput = {
    classStyle: "form-control",
    value: inputValue,
    onChange: setInputValue
  };

  const editItemAccept = () => {
    axios.patch('http://localhost:8000/updateTask', {
      _id: allList[index],
      text: inputValue
    }).then((res) => {
      setAllList([...res.data.data]);
    });
    closeInputValue();
  };

  const closeInputValue = () => {
    setCheckEdit(!setCheckEdit);
    setInputValue('')
  };

  const BtnEditNote = {
    edit: {
      classStyle: "btn btn-success",
      value: <svg xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>,
      onClickFunc: editItemAccept
    },
    cancel: {
      classStyle: "btn btn-danger",
      value: <svg xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>,
      onClickFunc: closeInputValue
    }
  }

  return (
    <div className={`list-edit list-edit-${index+1}`}>
      <div className="list-edit-input">
        <Input InputSettings={MainInput}/>
      </div>
      <div className="list-edit-btns">
        <Button BtnSettings={BtnEditNote.edit}/>
        <Button BtnSettings={BtnEditNote.cancel}/>
      </div>
    </div>
  );
};

export default ListItemEdit;

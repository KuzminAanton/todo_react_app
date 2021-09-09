import React from 'react';
import Input from "./Input";
import Button from "./Button";

const Header = (props) => {

  const {sendInput, sendButton} = props;
  const {add, cancel} = sendButton;

  return (
    <header>
      <div className="header-title">
        <h1>To-Do List</h1>
      </div>
      <div className="header-inputs">
        <Input send={sendInput}/>
        <Button send={add}/>
        <Button send={cancel}/>
      </div>
    </header>
  );
};

export default Header;

import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import List from "./components/List";

let allList = [];

function App() {

  const [allListState, setAllListState] = useState(allList);

  console.log(allListState)
  const [mainInputValue, setMainInputValue] = useState("");

  const mainInput = {
    onInputState: setMainInputValue,
    value: mainInputValue,
    classStyle: "form-control"
  }

  const addNote = () => {
    allList.push({
      text: mainInputValue,
      isCheck: false
    });
    setAllListState(allList);
    clearInput();
  };

  const clearInput = () => {
    setMainInputValue("");
  };

  const mainButton = {
    add: {
      func: addNote,
      value: "add",
      classStyle: "btn-success"
    },
    cancel: {
      func: clearInput,
      value: "Clear",
      classStyle: "btn-danger"
    }
  }

  return (
    <div className="App">
      <Header sendInput={mainInput}
              sendButton={mainButton}
      />
      <List allList={allListState} setAllListState={setAllListState}/>
    </div>
  );
}

export default App;

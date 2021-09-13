import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import axios from "axios";

function App() {

  const [allList, setAllList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then((res) => {
      setAllList(res.data.data);
    });
  }, [setAllList]);



  return (
    <div className="App">
      <Header allList={allList}
              setAllList={setAllList}
      />
      <List allList={allList}
            setAllList={setAllList}
      />
    </div>
  );
}

export default App;

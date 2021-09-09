import React from 'react';
import NoteItem from "./NoteItem";

const List = (props) => {

  const { allList, setAllListState } = props;




  return (
    <div className={"lists"}>      {
      allList.map((value, i) => {
        return (
          <NoteItem text={value}
                    i={i}
                    key={i + 1}
                    allList={allList}
                    setAllListState={setAllListState}
          />
        )
      })
    }
    </div>
  );
};

export default List;

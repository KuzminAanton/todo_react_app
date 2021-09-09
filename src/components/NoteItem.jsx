import React from 'react';

const NoteItem = (props) => {

  const { text, i, allList, setAllListState } = props;

  const myFunc228 = (index) => {
    console.log(allList)
    allList[index].isCheck = !allList[index].isCheck;
    console.log(allList)
    // setAllListState(allList);
  }

  // console.log(text)

  return (
    <div className={`list`}>
      <div className="list-text">
        <span className="list-text-number">
         {`${i + 1}) `}
        </span>
        <input onClick={() => myFunc228(i)} type="checkbox"/>
        <span className="list-text-content">
         {text.isCheck ? '!!!!!' : text.text}
        </span>
      </div>

    </div>
  );
};

export default NoteItem;

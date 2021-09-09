import React from 'react';

const Input = (props) => {

  const { classStyle, onInputState, value } = props.send;

  return (
    <input className={classStyle}
           value={value}
           onChange={e => onInputState(e.target.value)}/>
  );
};

export default Input;

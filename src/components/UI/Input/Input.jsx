import React from 'react';

const Input = (props) => {

  const { classStyle, value, onChange } = props.InputSettings;

  return (
    <input className={classStyle}
           value={value}
           onChange={event => onChange(event.target.value)}
    />
  );
};

export default Input;

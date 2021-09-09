import React from 'react';

const Button = (props) => {

  const { classStyle, func, value } = props.send;

  return (
    <button className={`btn ${classStyle}`}
            onClick={e => func(e)}>
      {value}
    </button>
  );
};

export default Button;

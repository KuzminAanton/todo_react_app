import React from 'react';

const Button = (props) => {

  const { classStyle, value, onClickFunc } = props.BtnSettings;

  return (
    <button className={classStyle}
            onClick={onClickFunc}
    >
      {value}
    </button>
  );
};

export default Button;

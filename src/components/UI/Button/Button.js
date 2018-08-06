import React from 'react';

import classes from './Button.css';

const Button = (props) => (
  <button
      className={[classes.Button, classes[props.btyType]].join(' ')}
      onClick={props.clicked}>{props.children}</button>
);

export default Button;

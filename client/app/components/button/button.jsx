import React from 'react';

import styles from './button.scss';

const Button = ({ onClick, children }) => (
  <button className={styles['button']} onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;

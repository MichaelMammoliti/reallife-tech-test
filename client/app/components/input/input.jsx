import React from 'react';

import styles from './input.scss';

const Input = ({ type, onChange, placeholder }) => (
  <input
    className={styles['input']}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;

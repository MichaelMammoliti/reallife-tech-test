import React from 'react';

import styles from './input.scss';

const Input = ({
  type,
  onChange,
  name,
  placeholder,
}) => {
  const handleChange = (event) => {
    onChange({ name, value: event.currentTarget.value });
  };

  return (
    <input
      className={styles['input']}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;

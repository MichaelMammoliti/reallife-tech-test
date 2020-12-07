import React, { useState } from 'react';

import styles from './select.scss';

const Select = ({ options, name, onChange }) => {
  const handleChange = event => {
    const { value } = event.currentTarget;

    onChange({
      name,
      value,
    });
  };

  return (
    <select className={styles.select} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;

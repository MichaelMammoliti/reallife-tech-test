import React from 'react';
import { Link } from 'react-router-dom';

import styles from './button.scss';

const Button = ({ type, children, onClick }) => (
  <button className={styles['button']} type={type || 'button'} onClick={onClick}>
    {children}
  </button>
);

const ButtonWrapper = ({
  to,
  type,
  children,
  onClick,
}) => {
  if (to) {
    return (
      <Link to={to} onClick={onClick}>
        <Button type={type}>{children}</Button>
      </Link>
    );
  }

  return (
    <Button type={type} onClick={onClick}>{children}</Button>
  );
};

ButtonWrapper.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default ButtonWrapper;

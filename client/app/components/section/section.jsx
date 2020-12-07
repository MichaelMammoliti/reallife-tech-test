import React from 'react';

import styles from './section.scss';

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <div className={styles['section__title']}>
      <h2>{title}</h2>
    </div>
    <div className={styles['section__body']}>
      {children}
    </div>
  </div>
);

export default Section;

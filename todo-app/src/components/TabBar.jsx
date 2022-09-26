import React from 'react';
import styles from '../styles/style';
import { Button } from './Button';

const TabBar = () => {
  return (
    <div
      className={`${styles.flexCenter} w-full h-16 bg-blue-gradient space-x-8 fixed left-0 bottom-0 shadow-md lg:hidden`}
    >
      <Button />
    </div>
  );
};

export { TabBar };

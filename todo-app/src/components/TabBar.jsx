import React from 'react';
import styles from '../styles/style';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

const TabBar = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.flexCenter} w-full h-14 bg-blue-gradient space-x-8 fixed left-0 bottom-0 shadow-md lg:hidden rounded-t-xl z-0`}
    >
      <Button onClick={() => navigate('/new')} />
    </div>
  );
};

export { TabBar };

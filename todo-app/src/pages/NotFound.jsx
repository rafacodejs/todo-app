import React from 'react';
import image from '../assets/404.png';
import styles from '../styles/style';

const NotFound = () => {
  return (
    <div className={`${styles.flexCenter} h-screen relative bottom-28 sm:bottom-0`}>
      <img src={image} alt='404' />
    </div>
  );
};

export { NotFound };

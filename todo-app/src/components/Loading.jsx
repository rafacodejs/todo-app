import React from 'react';
import style from '../styles/style';

const Loading = () => {
  return (
    <p className={`${style.flexCenter} ${style.heading2} relative bottom-48`}>
      Loading...
    </p>
  );
};

export { Loading };

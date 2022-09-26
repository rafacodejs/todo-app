import React from 'react';
import styles from '../styles/style';

const List = (props) => {
  return (
    <section>
      <ul
        className={`${styles.flexCenter} flex-col mb-10 px-6 list-none text-white`}
      >
        {props.children}
      </ul>
    </section>
  );
};

export { List };

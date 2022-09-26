import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/style';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div
      className={`${styles.flexStart} fixed top-[100px] left-[10px] bottom-[10px] right-[10px] z-40 text-white`}
    >
      {children}
    </div>,
    document.getElementById('modal')
  );
};

export { Modal };

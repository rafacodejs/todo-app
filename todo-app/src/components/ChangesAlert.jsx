import React from 'react';
import { useStorageListener } from './useStorageListener';
import styles from '../styles/style';

const ChangesAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div
        className={`${styles.flexCenter} ${styles.paragraph} bg-primary w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed z-20 text-[14px] xs:text-[19px] text-center`}
      >
        <div className='w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 absolute bg-black-gradient z-[-2] opacity-[0.7]'></div>
        <div className='text-white leading-[25px]'>
          <p className='mb-4 text-dimWhite'>
            Parece que cambiaste tus TODOs en <br className=' ss:hidden' />
            otra pestaña o ventana del navegador.
          </p>
          <p className='font-poppins font-semibold ss:text-[32px] text-[20px] relative bottom-2 ss:mt-3 text-gradient ss:leading-[60px] leading-[20px] ss:ml-3'>
            ¿Quieres sincronizar tus TODOs?
          </p>
          <button
            className='w-[185px] h-[50px] bg-blue-gradient text-black rounded-[8px] mt-2 text-[20px]'
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export { ChangesAlert };

import React from 'react';
import { BiPlus } from 'react-icons/bi';
import styles from '../styles/style';

const Button = (props) => {
  return (
    <div>
      <button
        className={`${styles.flexCenter} bg-black-gradient shadow-md border-none rounded-full text-[50px] cursor-pointer relative bottom-[15px] md:bottom-[40px] md:right-[50px] font-semibold text-black w-[64px] h-[64px] z-10 hover:transform hover:rotate-360 shadow-3xl transition-all duration-500 ease-in-out transform hover:-translate-y-5`}
        onClick={props.onClick}
      >
        <BiPlus className='text-white' />
      </button>
    </div>
  );
};

export { Button };

import React from 'react';
import styles from '../styles/style';
import { BiCheck } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';

const Item = (props) => {
  return (
    <li
      className={`w-[300px] h-[64px] relative mt-6 rounded-[12px] ${styles.flexCenter} bg-black-gradient xs:w-[500px] xs:bottom-10`}
    >
      <span
        className={`${
          styles.flexCenter
        } cursor-pointer w-[36px] h-[36px] text-[24px] font-bold rounded-[50%] border-2 border-secondary text-white absolute left-2 top-3 xs:w-[48px] xs:h-[48px] xs:top-2   ${
          props.completed && 'text-secondary'
        }`}
        onClick={props.onComplete}
      >
        <BiCheck className='text-[42px]' />
      </span>
      <p
        className={`w-full ml-[55px] italic font-semibold text-[22px] xs:text-[28px] xs:ml-[65px] ${
          props.completed && ' line-through'
        }`}
      >
        {props.text}
      </p>
      <span
        className={`${
          styles.flexCenter
        } bg-blue-gradient cursor-pointer w-[48px] h-[48px] text-[42px] font-bold rounded-[50%] text-white absolute right-0 top-[-18px] ${
          props.onDelete && 'text-white'
        }`}
        onClick={props.onDelete}
      >
        <BiX className='hover:text-black' />
      </span>
    </li>
  );
};

export { Item };

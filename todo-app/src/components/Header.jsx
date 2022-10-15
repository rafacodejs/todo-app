import React from 'react';
import style, { layout } from '../styles/style';
import imageToDo from '../assets/imageToDo.png';

const Header = ({ children, loading }) => (
  <header className={`${style.flexCenter} ${layout.section}`}>
    <img
      src={imageToDo}
      alt='LOGO'
      className='sm:w-[70px] w-[55px] mt-5 sm:mt-0 object-contain transition-all duration-500 ease-in-out transform hover:-translate-y-3'
    />
    <h1 className='font-poppins font-semibold ss:text-[50px] text-[32px] relative bottom-2 ss:mt-3 text-gradient ss:leading-[60px] leading-[75px] ss:ml-3'>
      TODO MACHINE
    </h1>

    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        {React.Children.toArray(children).map((child) =>
          React.cloneElement(child, { loading })
        )}
      </div>
    </div>
  </header>
);

export { Header };

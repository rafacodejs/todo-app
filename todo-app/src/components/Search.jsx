import React from 'react';
import style from '../styles/style';
import { Context } from '../context/context';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(Context);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form
      className={`${style.flexCenter}  mb-5 px-4 relative bottom-6 xs:bottom-0`}
    >
      <div className='relative '>
        <BiSearch className='absolute top-0 bottom-0 w-8 h-8 my-auto text-black left-2' />
        <input
          type='text'
          placeholder='Search'
          className='w-full h-[65px] py-3 pl-12 pr-4 text-black text-[16px] font-poppins font-medium rounded-xl outline-none border-none bg-blue-gradient placeholder:text-gray-700 xs:w-[470px] xs:text-[22px] '
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </form>
  );
};

export { Search };

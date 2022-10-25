import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/style';

const Form = (props) => {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const navigate = useNavigate();

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    navigate('/');
    props.submitEvent(newTodoValue);
  };

  return (
    <div className={`${style.flexCenter} ${style.padding} w-full`}>
      <div className='w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 absolute bg-black-gradient z-[-2] opacity-[0.7]' />
      <div className={`${style.flexCenter} ${style.padding} z-40`}>
        <form
          className={`${style.flexCenter} w-[400px] h-[450px] flex-col bg-black-gradient py-[33px] px-[40px] rounded-[10px]`}
          onSubmit={onSubmit}
        >
          <label className='font-poppins text-center uppercase font-semibold text-[20px] text-gradient'>
            {props.label}
          </label>
          <textarea
            className='font-poppins bg-dimWhite text-black
        text-2xl text-center mt-2 p-2 h-[50px] w-[250px] md:w-96 rounded-[6px] outline-none placeholder:text-black placeholder:text-[16px] '
            value={newTodoValue}
            onChange={onChange}
            placeholder='Escribe una nueva tarea'
          />
          <div className={`${style.flexCenter}`}>
            <button
              type='button'
              className={`w-[100px] mr-4 py-4 item-center mt-6 rounded-xl bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none transition-all duration-500 ease-in-out transform hover:-translate-y-3`}
              onClick={onCancel}
            >
              Cancelar
            </button>

            <button
              className={`w-[100px] py-4 item-center mt-6 rounded-xl bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none transition-all duration-500 ease-in-out transform hover:-translate-y-3`}
              type='submit'
            >
              {props.submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Form };

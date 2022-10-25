import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles, { layout } from '../styles/style';
import image from '../assets/imageToDo.png';

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
    <div className={`${styles.flexCenter} ${styles.padding}`}>
      <div
        className={`${styles.flexCenter} ${layout.section} w-full h-[700px] md:h-[500px] bg-black-gradient rounded-[10px] shadow-3xl`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-discount-gradient w-11/12 lg:w-[800px] lg:mr-10 h-[300px] md:h-[400px] mb-4 rounded-[12px] box-shadow`}
        >
          <form onSubmit={onSubmit} className={`${styles.flexCenter} flex-col`}>
            <label className='font-poppins text-center uppercase font-semibold text-[20px] md:text-[40px] text-gradient mt-4'>
              {props.label}
            </label>
            <textarea
              value={newTodoValue}
              onChange={onChange}
              placeholder='Escribe una nueva tarea'
              className='font-poppins bg-dimWhite text-black
        text-2xl text-center mt-2 p-2 h-[100px] w-[250px]   md:w-96 rounded-[6px] outline-none placeholder:text-black placeholder:text-[16px] '
            />
          </form>

          <div className={`${styles.flexCenter}`}>
            <button
              type='button'
              onClick={onCancel}
              className={`w-[100px] mr-4 py-4 item-center mt-6 rounded-xl bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none transition-all duration-500 ease-in-out transform hover:-translate-y-3`}
              //onClick={onCancel}
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
        </div>

        <img src={image} alt='todo-logo' className='w-[200px] md:w-[300px]' />
      </div>
    </div>
  );
};

export { Form };

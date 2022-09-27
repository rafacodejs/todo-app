import React from "react";
import style from "../styles/style";
import { Context } from "../context/context";

const Form = () => {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(Context);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(true);
  };

  return (
    <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed">
      <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 absolute bg-black-gradient z-[-2] opacity-[0.7]"></div>
      <div className="flex justify-center items-center mt-24 z-40">
        <form
          className={`${style.flexCenter} flex-col w-[90%] max-w-[500px] bg-black-gradient py-[33px] px-[40px] rounded-[12px]`}
          onSubmit={onSubmit}
        >
          <label className="font-poppins text-center uppercase font-semibold text-[20px] text-white">
            Escribe tu nuevo To Do
          </label>
          <textarea
            className="font-poppins bg-dimWhite text-black
        text-2xl text-center mt-2 p-2 h-[50px] w-[250px] md:w-96 rounded-[12px] outline-none placeholder:text-black placeholder:text-[16px] "
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe una nueva tarea"
          />
          <div className={`${style.flexCenter}`}>
            <button
              type="button"
              className={`w-[100px] mr-4 py-4 item-center mt-6 rounded-xl bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none transition-all duration-500 ease-in-out transform hover:-translate-y-3`}
              onClick={onCancel}
            >
              Cancelar
            </button>

            <button
              className={`w-[100px] py-4 item-center mt-6 rounded-xl bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none transition-all duration-500 ease-in-out transform hover:-translate-y-3`}
              type="submit"
            >
              Añadir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Form };

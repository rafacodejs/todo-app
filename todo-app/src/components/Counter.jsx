import React from 'react';
import style from '../styles/style';
import { Context } from '../context/context';

const Counter = () => {
  const { totalTodos, completedTodos } = React.useContext(Context);

  return (
    <h2
      className={`${style.paragraph} ${style.flexCenter} mb-4 relative bottom-10 xs:bottom-4`}
    >
      Has completado {completedTodos} de {totalTodos} ToDos
    </h2>
  );
};

export { Counter };

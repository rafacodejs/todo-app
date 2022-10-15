import React from 'react';
import style from '../styles/style';

const Counter = ({totalTodos, completedTodos, loading}) => {
  return (
    <h2
      className={`${style.paragraph} ${style.flexCenter} mb-4 relative bottom-5 xs:bottom-0 ${loading ? 'opacity-40' : 'opacity-none'}`}
    >
      Has completado {completedTodos} de {totalTodos} ToDos
    </h2>
  );
};

export { Counter };

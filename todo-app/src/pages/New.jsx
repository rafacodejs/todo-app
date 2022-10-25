import React from 'react';
import { Form } from '../components';
import { useTodos } from '../Hooks/useTodos';

const New = () => {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <div>
      <Form
        label='Escribe tu nuevo TODO'
        submitText='Añadir'
        submitEvent={(text) => addTodo(text)}
      />
    </div>
  );
};

export { New };

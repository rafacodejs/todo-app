import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Form, Loading } from '../components';
import { useTodos } from '../Hooks/useTodos';

const Edit = () => {
  const location = useLocation();

  const params = useParams();
  const id = Number(params.id);
  const { states, stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  const { loading, getTodo } = states;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <Loading />;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }

  return (
    <div>
      <Form
        label='Edita tu nuevo TODO'
        defaultText={todoText}
        submitText='Editar'
        submitEvent={(newText) => editTodo(id, newText)}
      />
    </div>
  );
};

export { Edit };

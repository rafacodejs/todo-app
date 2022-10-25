import React from 'react';
import { Form } from '../components';

const New = () => {
  return (
    <div>
      <Form
        label='Escribe tu nuevo TODO'
        submitText='Anadir'
        submitEvent={() => console.log('LLAMAR A ADDTODO')}
      />
    </div>
  );
};

export { New };

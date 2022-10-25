import React from 'react';
import { Form } from '../components';

const Edit = () => {
  return (
    <div>
      <Form
        label='Edita tu nuevo TODO'
        submitText='Editar'
        submitEvent={() => console.log('LLAMAR A edit todo')}
      />
    </div>
  );
};

export { Edit };

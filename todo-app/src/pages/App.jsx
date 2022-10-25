import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home, New, Edit, NotFound } from './index';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export { App };

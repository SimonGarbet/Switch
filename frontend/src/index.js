import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

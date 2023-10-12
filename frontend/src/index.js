import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import DayLocation from './pages/DayLocation';
import NightLocation from './pages/NightLocation';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/daylocation/:id' element={<DayLocation />} />
          <Route path='/nightlocation/:id' element={<NightLocation />} />
          <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

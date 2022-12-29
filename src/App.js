import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

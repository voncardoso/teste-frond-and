import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';




const App = ():JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

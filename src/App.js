import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
        <Route element={<Home/>} path="/" exact />
        <Route element={<NasaPhoto/>} path="/nasaphoto" />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

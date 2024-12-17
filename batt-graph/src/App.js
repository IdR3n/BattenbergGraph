import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import NavStrap from './Components/NavbarFIle/NavStrap.js';
import Adding from './Pagination/Adding.js';
import Graphing from './Pagination/Graphing.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Navbars'>
          <NavStrap />
        </div>
        <div className='Carouselles'>
          {/*L'autre choses qui devrait visible dans le page*/}
        <Adding />
        <Graphing />
        
        </div>
      </header>
    </div>
  );
}

export default App;

   
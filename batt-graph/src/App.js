import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import NavStrap from './Components/NavbarFIle/NavStrap.js';
import Adding from './Pagination/Adding.js';
import Graphing from './Pagination/Graphing.js';
import Documentation from './Pagination/Documentation.jsx';
import HomePage from './Pagination/HomePage.js';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavStrap />
        <Routes>
            <Route path="/" element={< HomePage/>} />
            <Route path="/adding" element={< Adding/>} />
            <Route path="/graphing" element={< Graphing/>} />
            <Route path="/documentation" element={< Documentation/>} />
        </Routes>
        </header>
    </div>
    </Router>
  );
}

export default App;

   
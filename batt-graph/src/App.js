import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import logo from './logo.svg';
//import Chart from './Components/chart.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import NavStrap from './Components/NavbarFIle/NavStrap.js';
import Adding from './Pagination/Adding.js';
import Graphing from './Pagination/Graphing.js';
<link rel="stylesheet" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />

function App() {
  return (
    <Router>
      <NavStrap />
      <Routes>
        <Route path='./Pagination/Adding.js' element={<Adding />}/>
        <Route path='./Pagination/Graphing.js' element={<Graphing />} />
      </Routes>
    </Router>
  );
}

export default App;

   
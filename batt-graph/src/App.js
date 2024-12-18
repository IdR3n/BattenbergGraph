import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import NavStrap from './Components/NavbarFIle/NavStrap.js';
import Adding from './Pagination/Adding.js';
import Graphing from './Pagination/Graphing.js';
import Documentation from './Pagination/Documentation.jsx';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavStrap />
        <Routes>
            <Route path="/adding" element={< Adding/>} />
            <Route path="/graphing" element={< Graphing/>} />
            <Route path="/documentation" element={< Documentation/>} />
        </Routes>
          
        <div className='bodyPlace'>
          {/*L'autre choses qui devrait visible dans le page*/}
          <h2 className='bodyPlace'>Bienvenue à Battenberg Grapher!</h2>
          <p className='bodyPlace'>Ici vous pouvez observer les services que vous recevrez de Nagios Core avec des graphiques en direct(live graphing),<br /> Si vous êtes curieux comment cela fonctionne ou comment le faire, vous pouvez consulter la page Documentation dans le barre latéralle.</p>
        </div>
        </header>
    </div>
    </Router>
  );
}

export default App;

   
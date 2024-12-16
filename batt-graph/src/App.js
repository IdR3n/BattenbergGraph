
import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
const App = () => {

  const [dataPoints, setDataPoints] = useState([10, 20, 15, 30, 25]);

  useEffect(()=> {
    const interval = setInterval(() => {
setDataPoints(prev => [...prev.slice(1), Math.floor(Math.random() * 50)]);
    }, 1000);

    return () => clearInterval(interval);
 
  }, []);

  const data = {
    labels: Array(dataPoints.length).fill(''),
    datasets: [
      {
        label: 'CPU Usage',
        data: dataPoints,
        borderColor: 'rgba(75,192,192,1)',
        backgroundCOlor: 'rgba(75,192,192,0.2)',
        fill: true,
    },
  ],
};
return (

  <div>
    <h1>Live Graph</h1>
    <Line data={data} />
</div>
);
};

export default App;

//import logo from './logo.svg';
//import './App.css';

//function App() {
//  return (
//   <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}


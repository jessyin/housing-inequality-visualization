import React from 'react';
import LineChart from './components/LineChart';
import Map from './components/Map';
import './App.css';

function App() {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ];
  return (
    <div className="App">
      <div className="Map">
        <Map />
      </div>
      <div className="Bottom-Data">
        <LineChart data={data} />
      </div>
    </div>
  );
}

export default App;

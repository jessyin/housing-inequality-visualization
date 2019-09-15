import React from 'react'
import LineChart from './components/LineChart';
import Map from './components/Map';
import './App.css';
import housingData from './static/housing_data.json'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedState: 'MA',
      selectedYear: '2019'
    }
  }
  render() {
    console.log(housingData)
    return (
      <div>
        <div className="Map">
          <Map />
        </div>
        <div className="Bottom-Data" style={{width: '50%'}}>
          <LineChart data={housingData[this.state.selectedState]} />
        </div>
      </div>
    )
  }
}

export default Main
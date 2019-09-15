import React from 'react'
import LineChart from './components/LineChart';
import Map from './components/Map';
import './App.css';
import housingData from './static/housing_data.json'
import homelessnessData from './static/homelessness_data.json'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedState: 'MA',
      selectedYear: '2019'
    }
  }

  handleSelectState = (state) => {
    console.log('selectstate', state)
    this.setState({ selectedState: state })
  }

  render() {
    return (
      <div style={{display: 'flex', height: '100%'}}>
        <div className="Map">
          <Map handleSelectState={this.handleSelectState} selectedState={this.state.selectedState} />
        </div>
        <div className="Right-Data">
            <LineChart 
              housingData={housingData[this.state.selectedState]}
              homelessnessData={homelessnessData[this.state.selectedState]}/>
        </div>
      </div>
    )
  }
}

export default Main
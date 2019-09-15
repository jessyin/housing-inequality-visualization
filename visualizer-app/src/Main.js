import React from 'react'
import LineChart from './components/LineChart';
import Map from './components/Map';
import DateSlider from './components/DateSlider';
import './App.css';
import housingData from './static/housing_data.json'
import homelessnessData from './static/homelessness_data.json'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedState: 'MA',
      selectedYear: 2019
    }
  }

  handleSelectState = (state) => {
    console.log('selectstate', state)
    this.setState({ selectedState: state })
  }

  handleSelectYear = (year) => {
    console.log(year)
    this.setState({ selectedYear: year })
  }

  render() {
    return (
      <div className="Main" style={{ flexDirection: "column" }}>
        <DateSlider selectedYear={this.state.selectedYear} onChange={this.handleSelectYear} />
        <div className="Main" style={{ flexDirection: "row" }}>
          <div className="Map">
            <Map
              handleSelectState={this.handleSelectState}
              selectedState={this.state.selectedState}
              selectedYear={this.state.selectedYear}
              housingData={housingData}
            />
          </div>
          <div className="Right-Data">
              <LineChart 
                housingData={housingData[this.state.selectedState]}
                homelessnessData={homelessnessData[this.state.selectedState]}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
import React from 'react'
import LineChart from './components/LineChart';
import Map from './components/Map';
import DateSlider from './components/DateSlider';
import PeopleNumber from './components/PeopleNumber';
import './App.css';
import housingData from './static/housing_data.json'
import homelessnessData from './static/homelessness_data.json'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedState: 'MA',
      selectedYear: 2018
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

  getHomelessCount = () => {
    const countData = homelessnessData[this.state.selectedState].find(obj => obj.x === this.state.selectedYear)
    if (!countData) {
      return null
    }
    return countData.y
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
                height="auto"
                selectedYear={this.state.selectedYear}
                housingData={housingData[this.state.selectedState]}
                homelessnessData={homelessnessData[this.state.selectedState]}/>
              <PeopleNumber number={this.getHomelessCount()} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
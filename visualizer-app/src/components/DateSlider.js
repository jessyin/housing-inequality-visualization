import React from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';

const MIN_YEAR = 2010
const MAX_YEAR = 2018
class DateSlider extends React.Component {
  createYearLabels = () => {
    const labels = {}
    for (let i = MIN_YEAR; i <= MAX_YEAR; i++) {
      labels[i] = i;
    }
    return labels
  }

  render() {
    return(
      <div style={{ paddingRight: '10%', paddingLeft: "10%" }}>
        <Slider
          min={MIN_YEAR}
          max={MAX_YEAR}
          defaultValue={this.props.selectedYear}
          onChange={this.props.onChange}
          dots
          marks={this.createYearLabels()}
        />
      </div>
    )
  }
}

export default DateSlider
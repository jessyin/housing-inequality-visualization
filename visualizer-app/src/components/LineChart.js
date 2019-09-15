import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

class LineChart extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <VictoryChart>
        <VictoryLine
          data={this.props.data}
        />
      </VictoryChart>
    );
  }
}

export default LineChart;

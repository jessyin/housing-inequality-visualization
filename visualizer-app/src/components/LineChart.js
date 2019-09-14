import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

class LineChart extends React.Component {
  render() {
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

import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel, VictoryContainer } from 'victory';
import Colors from '../Colors';

class LineChart extends React.Component {
  render() {
    console.log(this.props.housingData)
    console.log(this.props.homelessnessData)

    const housingMax = Math.max(...this.props.housingData.map((d) => d.y));
    const homelessnessMax = Math.max(...this.props.homelessnessData.map((d) => d.y));

    function find_housing_point(x, data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].x === x)
          return "$" + data[i].y / 1000 + "K"
      }
      return "N/A"
    }

    function find_homelessness_point(x, data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].x === x)
          return Math.round(data[i].y * 100 * 1000) / 1000 + "%"    // 3 decimal places
      }
      return "N/A"
    }

    console.log(housingMax)
    console.log(homelessnessMax)

    const darkred = Colors.spectrumDefault[Colors.spectrumDefault.length - 1];

    return (
      <VictoryChart
        height={270}
        containerComponent={<VictoryContainer style={{height: 'auto'}}/>}
        domainPadding={20}
        domain={{ y: [0, 1] }}
        offsetX={100}
        label="Housing Prices vs. Homelessness"
      >
        <VictoryLabel text="Housing Prices vs. Homelessness" x={225} y={30} textAnchor="middle"/>
        <VictoryLine
          style={{
            data: {stroke: Colors.lightblue, strokeDasharray: "5,5", strokeWidth: 1},
          }}
          x={() => Number(this.props.selectedYear)}
          
        />
        <VictoryLabel 
          text={[this.props.selectedYear, 
                  find_housing_point(Number(this.props.selectedYear), this.props.housingData),
                  find_homelessness_point(Number(this.props.selectedYear), this.props.homelessnessData)
                ]}
          x={225} 
          y={190} 
          textAnchor="middle"
          style={[{fill: Colors.lightblue}, {fill: darkred}, {fill: Colors.darkgray}]}
        />
        <VictoryAxis
          label="Year"
          style={{
            axis: {stroke: Colors.lightblue},
            axisLabel: {fill: Colors.lightblue},
            tickLabels: {fill: Colors.lightblue}
          }}
          // to avoid thousands commas
          tickFormat={(t) => t.toString()} 
        />

        {/* Left axis: Housing price data */}
        <VictoryLabel 
          text={["Median Home", "Listing Price"]}
          x={0} 
          y={30} 
          textAnchor="left"
          style={[{fontSize: 10, fill: darkred}, {fontSize: 10, fill: darkred}]}
        />
        <VictoryAxis
          dependentAxis={true}
          orientation="left"
          standalone={false}
          style={{
            axis: {stroke: darkred},
            axisLabel: {fill: darkred},
            tickLabels: {fill: darkred}
          }}
          // Use normalized tickValues (0 - 1)
          tickValues={[0.25, 0.5, 0.75, 1]}
          // Re-scale ticks by multiplying by correct maxima
          tickFormat={(t) => "$" + Math.round(t * housingMax / 1000) + "K"}
        />
        <VictoryLine
          data={this.props.housingData}
          animate={{
            duration: 2000,
          }}
          y={(datum) => datum.y / housingMax}
          style={{ data: {stroke: darkred} }}
        />

        {/* Right axis: Homelessness data */}
        <VictoryLabel 
          text={["Percentage", "Homelessness"]}
          x={380} 
          y={30} 
          textAnchor="right"
          style={[{fontSize: 10, fill: Colors.darkgray}, {fontSize: 10, fill: Colors.darkgray}]}
        />
        <VictoryAxis
          dependentAxis={true}
          orientation="right"
          standalone={false}
          style={{
            axis: {stroke: Colors.darkgray},
            axisLabel: {fill: Colors.darkgray},
            tickLabels: {fill: Colors.darkgray}
          }}
          // Use normalized tickValues (0 - 1)
          tickValues={[0.25, 0.5, 0.75, 1]}
          // Re-scale ticks by multiplying by correct maxima
          tickFormat={(t) => Math.round(t * homelessnessMax * 100 * 100) / 100 + "%"}
        />
        <VictoryLine
          data={this.props.homelessnessData}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          style={{ data: {stroke: Colors.darkgray} }}
          y={(datum) => datum.y / homelessnessMax}
        />
      </VictoryChart>
    );
  }
}

export default LineChart;

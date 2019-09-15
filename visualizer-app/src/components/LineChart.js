import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer } from 'victory';

class LineChart extends React.Component {
  render() {
    console.log(this.props.housingData)
    console.log(this.props.homelessnessData)

    const housingMax = Math.max(...this.props.housingData.map((d) => d.y));
    const homelessnessMax = Math.max(...this.props.homelessnessData.map((d) => d.y));

    console.log(housingMax)
    console.log(homelessnessMax)

    return (
      <VictoryChart
        domainPadding={20}
        domain={{ y: [0, 1] }}
        label="Housing Prices vs. Homelessness"
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `${datum.x}, ${datum.y}`}
          />
        }
      >
        <VictoryAxis
          label="Year"
          // so the years don't have thousands commas
          tickFormat={(t) => t.toString()}
        />
        <VictoryAxis
          dependentAxis={true}
          orientation="left"
          standalone={false}
          label="Median Home Listing Price ($)"
          // Use normalized tickValues (0 - 1)
          tickValues={[0.25, 0.5, 0.75, 1]}
          // Re-scale ticks by multiplying by correct maxima
          tickFormat={(t) => Math.round(t * housingMax)}
        />
        <VictoryLine
          data={this.props.housingData}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          y={(datum) => datum.y / housingMax}
        />
        <VictoryAxis
          dependentAxis={true}
          orientation="right"
          standalone={false}
          label="Overall Homelessness (Persons)"
          style={{
            axis: {stroke: "red"},
            axisLabel: {fill: "red"},
            tickLabels: {fill: "red"}
          }}
          // Use normalized tickValues (0 - 1)
          tickValues={[0.25, 0.5, 0.75, 1]}
          // Re-scale ticks by multiplying by correct maxima
          tickFormat={(t) => Math.round(t * homelessnessMax)}
        />
        <VictoryLine
          data={this.props.homelessnessData}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          style={{ data: {stroke: "red"} }}
          y={(datum) => datum.y / homelessnessMax}
        />
      </VictoryChart>
    );
  }
}

export default LineChart;

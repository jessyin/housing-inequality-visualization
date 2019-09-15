
import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import Colors from '../Colors';
import stateAbbreviations from '../static/state_abbreviations.json'

const _ = require('lodash');

const mapStyles = {
  hover: {
    fill: Colors.darkgray,
    stroke: Colors.darkgray,
    strokeWidth: 0.1,
    outline: "none",
  },
  pressed: {
    fill: Colors.orange,
    stroke: Colors.darkgray,
    strokeWidth: 0.1,
    outline: "none",
  },
  default: {
    fill: Colors.lightgray,
    stroke: Colors.darkgray,
    strokeWidth: 0.1,
    outline: "none",
  },
  selected: {
    fill: Colors.orange,
    stroke: Colors.darkgray,
    strokeWidth: 0.5,
    outline: "none",
  }
}

class Map extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 1,
    }
  }

  abbreviateName(stateName) {
    const stateData = _.invert(stateAbbreviations);
    return stateData[stateName]
  }

  handleSelectState = (geography) => {
    this.props.handleSelectState(this.abbreviateName(geography.properties.name))
  }

  isStateSelected = (geography) => {
    return this.props.selectedState === this.abbreviateName(geography.properties.name)
  }

  render() {
    return (
      <ComposableMap
        projectionConfig={{ scale: 1000 }}
      >
        <ZoomableGroup center={[-95,36]} disablePanning>
          <Geographies geography={`${process.env.PUBLIC_URL}/states-albers-10m.json`} disableOptimization>
            {(geographies, projection) => geographies.map(geography =>
              (<Geography
                key={ geography.id }
                geography={ geography }
                projection={ projection }
                onClick={this.handleSelectState}
                style={{
                  hover: mapStyles.hover,
                  pressed: mapStyles.pressed,
                  default: this.isStateSelected(geography) ? mapStyles.selected : mapStyles.default
                }}
              />)
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    )
  }
}

export default Map

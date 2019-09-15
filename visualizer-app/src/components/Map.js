
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

const MAX_PRICE = 635000
const MIN_PRICE = 100000

const mapStyles = {
  hover: {
    fill: Colors.lightlightgray,
    stroke: Colors.lightgray,
    strokeWidth: 2,
    outline: "none",
  },
  pressed: {
    fill: Colors.darkgray,
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
    fill: Colors.darkgray,
    stroke: Colors.darkgray,
    strokeWidth: 2,
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

  calculateColor = (geography) => {
    const stateAbbreviation = this.abbreviateName(geography.properties.name)
    if (this.props.housingData[stateAbbreviation] === undefined) {
      return null
    }

    const currentPrice = this.props.housingData[stateAbbreviation].find(obj => {
      return obj.x === this.props.selectedYear
    })

    if (currentPrice === undefined) {
      return null
    }

    return Math.floor((currentPrice['y'] - MIN_PRICE)/MAX_PRICE * Colors.spectrumDefault.length)
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
    console.log('refresh')
    return (
      <ComposableMap
        projectionConfig={{ scale: 1000 }}
      >
        <ZoomableGroup center={[-95,36]} disablePanning>
          <Geographies geography={`${process.env.PUBLIC_URL}/states-albers-10m.json`} disableOptimization>
            {(geographies, projection) => geographies.map(geography => {
              let colorIndex = this.calculateColor(geography)
              return (
                <Geography
                  key={ geography.id }
                  geography={ geography }
                  projection={ projection }
                  onClick={this.handleSelectState}
                  style={{
                    hover: Object.assign({}, mapStyles.hover, colorIndex ? { fill: Colors.spectrumLight[colorIndex] } : null),
                    pressed: mapStyles.pressed,
                    default: this.isStateSelected(geography) 
                      ? Object.assign({}, mapStyles.selected, colorIndex ? { fill: Colors.spectrumDark[colorIndex] } : null) 
                      : Object.assign({}, mapStyles.default, colorIndex ? { fill: Colors.spectrumDefault[colorIndex]} : null)
                  }}
                />)
            }
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    )
  }
}

export default Map

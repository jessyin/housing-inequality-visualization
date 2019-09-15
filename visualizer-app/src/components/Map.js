
import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class Map extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 1
    }
  }

  handleZoomIn = () => {
    this.setState({ zoom: this.state.zoom * 2 })
  }

  handleZoomOut = () => {
    this.setState({ zoom: this.state.zoom / 2 })
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup disablePanning>
            <Geographies geography={`${process.env.PUBLIC_URL}/states-10m.json`}>
              {(geographies, projection) => geographies.map(geography => (
                <Geography
                  key={ geography.id }
                  geography={ geography }
                  projection={ projection }
                  />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default Map

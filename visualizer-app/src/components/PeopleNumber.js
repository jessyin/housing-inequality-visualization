import React from 'react'
import { FaFemale, FaMale, FaChild } from 'react-icons/fa'
import Colors from '../Colors';

const icons = [<FaFemale size={50} color={Colors.darkgray} />, <FaMale size={50} color={Colors.darkgray} />, <FaFemale size={50} color={Colors.darkgray} />, <FaMale size={50} color={Colors.darkgray} />, <FaChild size={30} color={Colors.darkgray} style={{paddingRight:10, paddingLeft:10}}/>]

class PeopleNumber extends React.Component {
  renderPeople = () => {
    if (!this.props.number) {
      console.log('none')
      return null
    }
    const size = Math.min(Math.max(Math.round(this.props.number*10000-15), 1), 36)
    console.log(size)
    return (<div>{[...Array(size)].map(i => icons[Math.floor(Math.random() * Math.floor(icons.length))])}</div>)
  }
  render() {
    return (
      <div style={styles.container}>
        {this.renderPeople()}
        <h1 style={styles.bignumber}>{(this.props.number*100).toFixed(2) || "N/A"}</h1>
        <p style={styles.text}>% homeless in {this.props.selectedState || "N/A"} ({this.props.selectedYear})</p>
      </div>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    maxHeight: '50%',
    paddingTop: '10px'
  },
  bignumber: {
    fontSize: '3em',
    margin: 0
  },
  text: {
    margin: 0
  }
}

export default PeopleNumber;
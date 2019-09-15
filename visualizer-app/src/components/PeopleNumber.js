import React from 'react'
import { FaFemale, FaMale, FaChild } from 'react-icons/fa'
import Colors from '../Colors';

class PeopleNumber extends React.Component {
  renderPeople = () => {
    if (!this.props.number) {
      console.log('none')
      return null
    }

    if (this.props.number < 1500) {
      return (<div><FaMale size={50} color={Colors.darkgray}/></div>)
    } else if (this.props.number < 5000) {
      return (<div><FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/></div>)
    } else if (this.props.number < 10000) {
      return (<div>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        </div>)
    } else if (this.props.number < 20000) {
      return (<div>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        </div>)
    } else if (this.props.number < 50000) {
      return (<div>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        </div>)
    } else if (this.props.number < 100000) {
      return (<div>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        </div>)
    } else {
      return (<div>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        <FaChild size={30} color={Colors.darkgray}/>
        <FaMale size={50} color={Colors.darkgray}/><FaFemale size={50} color={Colors.darkgray}/>
        </div>)
    }
  }
  render() {
    return (
      <div style={styles.container}>
        {this.renderPeople()}
        <h1 style={styles.bignumber}>{this.props.number || "N/A"}</h1>
        <p style={styles.text}>homeless in {this.props.selectedYear || "N/A"}</p>
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
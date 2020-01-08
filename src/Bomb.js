// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
        secondsLeft: props.initialCount
    }
  }

  render() {
    // if (this.props.initialCount === 0) {
    //     return <div>Boom!</div>
    // } else {
    //     return <div>{this.props.initialCount} seconds left before I go boom!</div>
        
    // }
    return (this.props.initialCount === 0 ? <div>Boom!</div> : <div>{this.props.initialCount} seconds left before I go boom!</div>)
  }
}

export default Bomb

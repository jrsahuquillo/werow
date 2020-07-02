import React, { Component } from 'react';
import ListBoats from './components/ListBoats'
import AddBoatForm from './components/AddBoatForm'

class Boats extends Component {

  constructor(props) {
    super(props)
    this.state = {
      boats: []
    }
  }

  createBoat = newBoat => {
    this.setState({
      boats: [...this.state.boats, newBoat]
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6 boats">
          <h4>Nueva Embarcación</h4>
          <AddBoatForm onCreate={this.createBoat} />
          <ListBoats boats={this.state.boats} />
        </div>
      </div>
    );
  }
}

export default Boats;
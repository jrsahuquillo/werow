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
  componentDidMount() {
    const storedBoats = JSON.parse(localStorage.getItem("storedBoats")) || [];
    this.setState({
      boats: storedBoats
    })
  }

  createBoat = newBoat => {
    this.setState({
      boats: [...this.state.boats, newBoat]
    })
    this.storeBoat(newBoat);
  }

  storeBoat = newBoat => {
    const storedBoats = JSON.parse(localStorage.getItem('storedBoats')) || [];
    const boatsToStore = [...storedBoats, newBoat];
    localStorage.setItem('storedBoats', JSON.stringify(boatsToStore));
  }

  render() {
    return (
      <div className="p-2">
        <div className="flex flex-col w-full md:flex-row">
          <div className="w-64 font-bold text-gray-800">Nueva Embarcación</div>
          <AddBoatForm onCreate={this.createBoat} />
        </div>
        <ListBoats boats={this.state.boats} />
      </div>
    );
  }
}

export default Boats;
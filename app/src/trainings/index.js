import React, { Component } from 'react';
import AddTrainingForm from './components/AddTrainingForm'
import ListTrainings from './components/ListTrainings'

class Trainings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trainings: []
    }
  }

  componentDidMount() {
    const storedTrainings = JSON.parse(localStorage.getItem("storedTrainings")) || [];
    this.setState({
      trainings: storedTrainings
    })
  }

  createTraining = newTraining => {
    this.setState({
      trainings: [...this.state.trainings, newTraining]
    })
    this.storeTraining(newTraining);
  }

  storeTraining = newTraining => {
    const storedTrainings = JSON.parse(localStorage.getItem('storedTrainings')) || [];
    const trainingsToStore = [...storedTrainings, newTraining];
    localStorage.setItem('storedTrainings', JSON.stringify(trainingsToStore));
  }

  render() {
    return (
      <div className="p-2">
        <div className="flex flex-col w-full md:flex-row">
          <div className="w-64 font-bold text-gray-800">Nuevos Entrenamientos</div>
          <AddTrainingForm onCreate={this.createTraining} />
        </div>
        <ListTrainings trainings={this.state.trainings} />
      </div>
    );
  }
}


export default Trainings;
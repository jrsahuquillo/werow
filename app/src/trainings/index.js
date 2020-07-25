import React, { Component } from 'react';


class Trainings extends Component {
  render() {
    return (
      <div className="p-2">
        <div className="flex flex-col w-full md:flex-row">
          <div className="w-64 font-bold text-gray-800">Nuevos Entrenamientos</div>
          {/* <AddTrainginForm onCreate={this.createTraining} /> */}
        </div>
        {/* <ListTrainings trainings={this.state.trainings} /> */}
      </div>
    );
  }
}


export default Trainings;
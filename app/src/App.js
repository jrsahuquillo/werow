import React, {Component} from 'react';
import Boats from "./boats"
import Trainings from "./trainings"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: <Trainings />
    }
  }

  optionsTabs = () => {
    return <ul className="flex">
      <li className="mr-3">
        <button className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 focus:bg-blue-500 focus:text-white" onClick={this.onClickBoatsButton}>
          Embarcaciones
        </button>
      </li>
      <li className="mr-3">
        <button className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 focus:bg-blue-500 focus:text-white" onClick={this.onClickTrainingsButton}>
          Entrenamientos
        </button>
      </li>
    </ul>
  };

  onClickBoatsButton = () => {
    this.setState({
      text: <Boats />
    });
  }

  onClickTrainingsButton = () => {
    this.setState({
      text: <Trainings />
    });
  }

  render () {
    return(
      <div>
        {this.optionsTabs()}
        <div>{this.state.text}</div>
      </div>
    )
  }
}

export default App;

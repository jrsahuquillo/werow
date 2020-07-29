import React, { Component } from 'react';

class AddTrainingForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      boat: '',
      level: ''
    };
  }

  dateRef = React.createRef();
  timeRef = React.createRef();
  boatRef = React.createRef();
  levelRef = React.createRef();

  handleInput = (e) => {
    this.setState({
      date: this.dateRef.current.value,
      time: this.timeRef.current.value,
      boat: this.boatRef.current.value,
      level: this.levelRef.current.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      date: '',
      time: '',
      boat: '',
      level: ''
    })
  }

  boatsOptions = () => {
    return (JSON.parse(localStorage.getItem("storedBoats")) || []).map((boat, i) => {
      return <option key={i} value={boat.value}>{boat.name}({boat.modality})</option>
    })
  }

  levelOptions = () => {
    return [1, 2, 3].map((level, i) => {
      return <option key={i} value={level}>{level.toString()}</option>
    })
  }

  render() {
    return (
      <form id="add-training-form"
        onSubmit={this.handleSubmit}
        className="w-full"
      >
        <div className="flex flex-wrap">
          <div className="w-8/12 lg:w-4/12 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="date">Fecha</label>
            <input
              type="date"
              name="date"
              id="date"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
              ref={this.dateRef}
              onChange={this.handleInput}
              value={this.state.date}
              required
            />
          </div>

          <div className="w-4/12 lg:w-2/12 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="time">Hora</label>
              <input
                type="time"
                name="time"
                id="time"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                ref={this.timeRef}
                onChange={this.handleInput}
                value={this.state.time}
                required
              />
            </div>

          <div className="w-8/12 lg:w-3/12 px-3 relative">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="boat">Embarcación</label>
            <select
              name="boat"
              data-testid="boat"
              ref={this.boatRef}
              className="block appearance-none w-full bg-gray-200 border text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={this.handleInput}
              value={this.state.boat}
              required
            >
              <option value="" disabled defaultValue>-</option>
              {this.boatsOptions()}
             
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>

          <div className="w-2/12 lg:w-2/12 px-3 relative">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="level">Nivel</label>
            <select
              name="level"
              data-testid="level"
              ref={this.levelRef}
              className="block appearance-none w-full bg-gray-200 border text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={this.handleInput}
              value={this.state.level}
              required
            >
              <option value="" disabled defaultValue>-</option>
              {this.levelOptions()}

            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>

          <div className="w-2/12 lg:w-1/12 px-3 py-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
              type="submit"
            > + </button>
          </div>
        </div>
      </form>
      )
  }

}

export default AddTrainingForm
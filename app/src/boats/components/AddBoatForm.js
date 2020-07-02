import React, { Component } from 'react';

class AddBoatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rowers: '',
      helmsman: false
    };
  }
  
  nameRef = React.createRef();
  rowersRef = React.createRef();
  helmsmanRef = React.createRef();

  handleInput = () => {
    this.setState({
      name: this.nameRef.current.value,
      rowers: parseInt(this.rowersRef.current.value),
      helmsman: this.helmsmanRef.current.checked
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onCreate(this.state)
  }

  render() {
    return (
      <form id="add-boat-form"
        onSubmit={this.handleSubmit}
      >
        <div className="row">
          <div className="input-field col s8">
            <input
              name="name"
              id="name"
              ref={this.nameRef}
              type="text"
              onChange={this.handleInput}
            />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className="input-field col s4">
            <input
              name="rowers"
              id="rowers"
              ref={this.rowersRef}
              type="text"
              onChange={this.handleInput}
            />
            <label htmlFor="rowers">Nº Remeras/os</label>
          </div>
        </div>
        <p>
          <label>
            <input
              name="helmsman"
              ref={this.helmsmanRef}
              type="checkbox"
              id="helmsman"
              onChange={this.handleInput}
            />
            <span>¿Timonel?</span>
          </label>
        </p>
        <button className="btn-floating btn-large waves-effect waves-light blue right" type="submit">
          <i className="material-icons">add</i>
        </button>
      </form>
    )
  }
}

export default AddBoatForm
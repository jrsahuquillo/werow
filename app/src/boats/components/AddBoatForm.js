import React, { Component } from 'react';

class AddBoatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rowers: '',
      modality: '',
      helmsman: false
    };
  }

  nameRef     = React.createRef();
  rowersRef   = React.createRef();
  helmsmanRef = React.createRef();
  modalityRef = React.createRef();

  handleInput = () => {
    this.setState({
      name: this.nameRef.current.value,
      rowers: parseInt(this.rowersRef.current.value) || '',
      modality: this.modalityRef.current.value,
      helmsman: this.helmsmanRef.current.checked
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // if(this.state.rowers === '') {
      //   // this.setState({rowers: 0});
      //   this.state.rowers = 0;
      // };
    this.props.onCreate(this.state);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      rowers: '',
      modality: '',
      helmsman: false
    })
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
              value={this.state.name}
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
              value={this.state.rowers}
            />
            <label htmlFor="rowers">Nº Remeras/os</label>
          </div>
        </div>

        <div className="input-field row">
          <div className="col s6">
            <label htmlFor="modality">Modalidad</label>
            <select ref={this.modalityRef} className="browser-default" onChange={this.handleInput} value={this.state.modality}>
              <option value="Seleccionar modalidad" disabled defaultValue>Selecciona modalidad</option>
              <option value="Banco Fijo">Banco Fijo</option>
              <option value="Banco Móvil">Banco Móvil</option>
            </select>
          </div>

          <div className="input-field col s4">
            <label htmlFor="helmsman">
              <input
                name="helmsman"
                ref={this.helmsmanRef}
                type="checkbox"
                id="helmsman"
                onChange={this.handleInput}
                checked={this.state.helmsman}
              />
              <span>¿Timonel?</span>
            </label>
          </div>

          <button className="btn-floating btn-large waves-effect waves-light blue right" type="submit">
            <i className="material-icons">add</i>
          </button>
        </div>
      </form>
    )
  }
}

export default AddBoatForm
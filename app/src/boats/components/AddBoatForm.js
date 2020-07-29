import React, { Component } from 'react';

class AddBoatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rowers: '',
      modality: '',
      helmsman: false,
      formErrors: {
        name: '',
        rowers: '',
        modality: ''
      },
      nameValid: false,
      rowersValid: false,
      modalityValid: false,
      formValid: false
    };
  }

  nameRef     = React.createRef();
  rowersRef   = React.createRef();
  helmsmanRef = React.createRef();
  modalityRef = React.createRef();

  handleInput = (e) => {
    let fieldName = e.target.name;
    let value;
      switch(fieldName) {
        case 'name':
          value = this.nameRef.current.value;
          break;
        case 'rowers':
          value = parseInt(this.rowersRef.current.value) || 1;
          break;
        case 'modality':
          value = this.modalityRef.current.value;
          break;
        case 'helmsman':
          value = this.helmsmanRef.current.checked;
          break;
        default:
          break;
      }
    this.setState({ [fieldName]: value },
      () => { this.validateField(fieldName, value) });

    // this.setState({
    //   name: this.nameRef.current.value,
    //   rowers: parseInt(this.rowersRef.current.value) || 0,
    //   modality: this.modalityRef.current.value,
    //   helmsman: this.helmsmanRef.current.checked
    // })

  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let rowersValid = this.state.rowersValid;
    let modalityValid = this.state.modalityValid;
    switch (fieldName) {
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      case 'rowers':
        rowersValid = value > 0;
        fieldValidationErrors.rowers = rowersValid ? '' : ' is invalid';
        break;
      case 'modality':
        modalityValid = value.length > 0;
        fieldValidationErrors.modality = modalityValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      rowersValid: rowersValid,
      modalityValid: modalityValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: (this.state.nameValid && this.state.rowersValid && this.state.modalityValid) });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      rowers: '',
      modality: '',
      helmsman: false,
      formErrors: {
        name: '',
        rowers: '',
        modality: ''
      },
      nameValid: false,
      rowersValid: false,
      modalityValid: false,
      formValid: false
    })
  }

  render() {
    return (
      <form id="add-boat-form"
        onSubmit={this.handleSubmit}
          className="w-full"
      >
        <div className="flex flex-wrap">
          <div className="w-8/12 lg:w-4/12 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
              ref={this.nameRef}
              onChange={this.handleInput}
              value={this.state.name}
              required
            />
          </div>
            
          <div className="w-4/12 lg:w-2/12 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold " htmlFor="rowers">Remeras/os</label>
            <input
              type="number"
              name="rowers"
              id="rowers"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
              ref={this.rowersRef}
              onChange={this.handleInput}
              value={this.state.rowers}
              min="0"
              required
            />
          </div>

          <div className="w-6/12 lg:w-3/12 px-3 relative">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold " htmlFor="modality">Modalidad</label>
            <select
              name="modality"
              data-testid="modality"
              ref={this.modalityRef}
              className="block appearance-none w-full bg-gray-200 border text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={this.handleInput}
              value={this.state.modality}
              required
              >
              <option value="" disabled defaultValue>-</option>
              <option value="fijo">Banco Fijo</option>
              <option value="movil">Banco Móvil</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>

          <div className="w-4/12 lg:w-1/12 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold " htmlFor="helmsman">¿Timonel?</label>
            <input
              type="checkbox"
              name="helmsman"
              ref={this.helmsmanRef}
              id="helmsman"
              onChange={this.handleInput}
              checked={this.state.helmsman}
            />  
          </div>

          <div className="w-2/12 lg:w-2/12 px-3 py-5">
            <button
              className={`${this.state.formValid ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded float-right` }
              type="submit"
              disabled={!this.state.formValid}
            >
              +
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default AddBoatForm
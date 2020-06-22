import React, {Component} from 'react';
import { fetchHelloWorld }  from './fetchHelloWorld';
import "./App.css"
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      item: []
    }
  }

  async handleClick() {
    const helloWorld = await fetchHelloWorld()
    this.setState({
      isLoaded: true,
      item: helloWorld
    })
    setTimeout(() => {
      this.setState({
        isLoaded: false
      })
    }, 1000);
  }

  renderMessage() {
    const { isLoaded, item } = this.state;
    if(!isLoaded) {
      return(
        <p>Click to say something to the World...</p>
      )
    }
    return(
      <h1>hello: {item.hello}</h1>
    )
  }

  render () {
    return(
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div><button onClick={ async () => { await this.handleClick() } }>Click me!</button></div>
        <div>{ this.renderMessage() }</div>
      </div>
    )
  }
}

export default App;

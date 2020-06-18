import React, {Component} from 'react';
import { fetchHelloWorld }  from './fetchHelloWorld';

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
  }

  renderMessage() {
    const { isLoaded, item } = this.state;
    if(!isLoaded) {
      return( <div>Loading...</div>)
    }
    return(
      <p>hello: {item.hello}</p>
    )
  }

  render () {
    return(
      <div className="App">
      <button onClick={ async () => {await this.handleClick()} }>Click me!</button>
        { this.renderMessage() }
      </div>
    )
  }
}

export default App;

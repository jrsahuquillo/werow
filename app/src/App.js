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

  async componentDidMount() {
    const helloWorld = await fetchHelloWorld()
    this.setState({
      isLoaded: true,
      item: helloWorld
    })
  }

  render () {
    const { isLoaded, item } = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    
    return(
      <div className="App">
        hello: {item.hello}
      </div>
    )
  }
}

export default App;

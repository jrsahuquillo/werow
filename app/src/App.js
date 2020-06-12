import React,  {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      item: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          item: json
        })
      });
  }

  render () {
    const { isLoaded, item } = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return(
        <div className="App">
          hello: {item.hello}
        </div>
      )
    }

  }
}

export default App;

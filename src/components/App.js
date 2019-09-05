import React from 'react';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
  	this.getData();
  }

  getData() {
  	fetch('http://localhost:8080/abc')
  	.then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
  	return (
  			<div>
  				<h1>SSR app</h1>
  				compoent  App
  			</div>
  		)
  }
  	
}

export default App;